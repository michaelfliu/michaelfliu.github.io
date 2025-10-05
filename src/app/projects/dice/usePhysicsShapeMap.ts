import { useRapier } from "@react-three/rapier";
import { baseGeometryMap } from "./constants";
import { useCallback, useMemo } from "react";
import { BoxGeometry, BufferGeometry, CylinderGeometry } from "three";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

const physicsGeometryMap = Object.fromEntries(
  Object.entries(baseGeometryMap).map(([type, geometry]) => [
    type,
    BufferGeometryUtils.mergeVertices(geometry.clone()),
  ])
);

export default function usePhysicsShapeMap() {
  const { rapier } = useRapier();

  const makeColliderShape = useCallback(
    (geometry: BufferGeometry) => {
      switch (geometry.type) {
        case BoxGeometry.name: {
          const { width, height, depth } = (geometry as BoxGeometry).parameters;
          return rapier.ColliderDesc.cuboid(width / 2, height / 2, depth / 2);
        }
        case CylinderGeometry.name: {
          const { height, radiusTop } = (geometry as CylinderGeometry)
            .parameters;
          return rapier.ColliderDesc.cylinder(height / 2, radiusTop);
        }
        default: {
          const points = new Float32Array(geometry.attributes.position.array);
          return rapier.ColliderDesc.convexMesh(points);
        }
      }
    },
    [rapier]
  );

  const physicsShapeMap = useMemo(
    () =>
      Object.fromEntries(
        Object.entries(physicsGeometryMap).map(([dieType, geometry]) => [
          dieType,
          makeColliderShape(geometry)!.setMass(1).setRestitution(0.5),
        ])
      ),
    [makeColliderShape]
  );

  return physicsShapeMap;
}
