import { useCallback, useEffect, useRef } from "react";
import { Group, Mesh, Vector3 } from "three";
import {
  Environment,
  OrbitControls,
  useKeyboardControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import {
  CuboidCollider,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from "@react-three/rapier";
import { OrbitControls as OrbitControlsType } from "three-stdlib";
import { DieTypes } from "./constants";
import usePhysicsShapeMap from "./usePhysicsShapeMap";
import useMeshFactoryMap from "./useMeshFactoryMap";

interface DieDragData {
  body: RapierRigidBody;
  distance: number;
}

export default function DiceScene() {
  // Hooks
  const { raycaster, camera } = useThree();
  const { world, rapier } = useRapier();
  const [sub] = useKeyboardControls<DieTypes>();

  const orbitControlsRef = useRef<OrbitControlsType>(null);
  const floorRef = useRef<Mesh>(null);
  const diceGroupRef = useRef<Group>(null);
  const movingDieBodyRef = useRef<[DieDragData | null]>([null]);

  const meshFactoryMap = useMeshFactoryMap();
  const physicsShapeMap = usePhysicsShapeMap();

  // Function to add a die to a point in the world
  const addDie = useCallback(
    (dieType: DieTypes, point: Vector3) => {
      if (diceGroupRef.current && meshFactoryMap) {
        const die = meshFactoryMap[dieType]();
        die.position.copy(point);
        diceGroupRef.current.add(die);

        const dieBody = world.createRigidBody(
          rapier.RigidBodyDesc.dynamic()
            .setTranslation(...point.toArray())
            .setLinearDamping(0.3)
            .setAngularDamping(0.2)
        );
        const dieShape = physicsShapeMap[dieType];
        const collider = world.createCollider(dieShape, dieBody);

        die.userData.physicsColliderHandle = collider.handle;
        die.userData.physicsBodyHandle = dieBody.handle;
      }
    },
    [meshFactoryMap, physicsShapeMap, rapier.RigidBodyDesc, world]
  );

  // Set initial scene parameters
  useEffect(() => {
    if (world && meshFactoryMap) {
      camera.position.set(0, 2, -3);
      if (diceGroupRef.current?.children.length === 0) {
        addDie(DieTypes.D6, new Vector3(0, 1, 0));
      }
    }
  }, [addDie, camera, meshFactoryMap, world]);

  // Keypress handlers
  useEffect(() => {
    const unsubs = Object.values(DieTypes).map((v) =>
      sub(
        (state) => state[v],
        (pressed) => {
          if (pressed && floorRef.current && diceGroupRef.current) {
            const intersections = raycaster.intersectObject(floorRef.current);
            const intersection = intersections[0];
            if (intersection) {
              addDie(v, intersection.point.add(new Vector3(0, 2, 0)));
            }
          }
        }
      )
    );
    return () => unsubs.forEach((fn) => fn());
  }, [addDie, raycaster, sub]);

  // Mouse handlers
  useEffect(() => {
    const mouseDownHandler = () => {
      if (diceGroupRef.current) {
        const intersection = raycaster.intersectObjects(
          diceGroupRef.current.children
        )[0];
        if (intersection) {
          const die = intersection.object;
          const dieBody = world.getRigidBody(die.userData.physicsBodyHandle);
          if (dieBody) {
            movingDieBodyRef.current[0] = {
              body: dieBody,
              distance: intersection.distance,
            };
            if (orbitControlsRef.current)
              orbitControlsRef.current.enabled = false;
          }
        }
      }
    };
    const mouseUpHandler = () => {
      const data = movingDieBodyRef.current[0];
      if (data) {
        movingDieBodyRef.current[0] = null;
        if (orbitControlsRef.current) orbitControlsRef.current.enabled = true;
      }
    };
    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);
    return () => {
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);
    };
  }, [rapier, raycaster, world]);

  // Pull the dragged die towards the cursor
  useFrame(() => {
    const data = movingDieBodyRef.current[0];
    if (floorRef.current && data) {
      let target: Vector3;
      const [intersection] = raycaster.intersectObject(floorRef.current);
      if (intersection && intersection.distance < data.distance) {
        target = intersection.point;
      } else {
        target = new Vector3();
        raycaster.ray.at(data.distance, target);
      }
      const disp = target.sub(data.body.translation());
      const impulse = disp
        .multiplyScalar(10)
        .sub(data.body.linvel())
        .multiplyScalar(0.2);
      data.body.applyImpulse(impulse, true);
    }
  });

  // Copy physics mesh positions to rendered meshes
  useFrame(() => {
    diceGroupRef.current?.children.forEach((die) => {
      const body = world.getRigidBody(die.userData.physicsBodyHandle);
      die.position.copy(body.translation());
      die.quaternion.copy(body.rotation());
    });
  });

  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <mesh ref={floorRef} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[10000, 10000]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>
        <CuboidCollider args={[5000, 0.5, 5000]} position={[0, -0.5, 0]} />
      </RigidBody>
      <group ref={diceGroupRef} />

      <Environment preset="studio" environmentIntensity={0.15} />
      <ambientLight intensity={0.5} />
      <color args={["grey"]} attach="background" />
      <OrbitControls
        ref={orbitControlsRef}
        maxPolarAngle={Math.PI / 2 - 0.1}
        enablePan={false}
        minDistance={1}
        maxDistance={100}
      />
    </>
  );
}
