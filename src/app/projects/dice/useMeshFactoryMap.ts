import { useEffect, useMemo, useRef, useState } from "react";
import { Mesh, MeshStandardMaterial, Texture, TextureLoader } from "three";

import { DieTypes } from "./constants";
import { useGLTF } from "@react-three/drei";

export default function useMeshFactoryMap() {
  const texMap = useRef<{ [key: string]: Texture | undefined }>({});
  const [texturesReady, setTexturesReady] = useState(false);
  const dieGLTF = useGLTF("/assets/dice/dice.glb");

  useEffect(() => {
    const loader = new TextureLoader();
    Promise.all(
      Object.keys(DieTypes).map((type) =>
        loader
          .loadAsync(`/assets/dice/textures/${type}.png`)
          .then((tex) => {
            tex.flipY = false;
            texMap.current[type] = tex;
          })
          .catch(() => (texMap.current[type] = undefined))
      )
    ).then(() => setTexturesReady(true));
  }, []);

  const geometryMap = useMemo(
    () => ({
      [DieTypes.D2]: (dieGLTF.scene.getObjectByName("d2") as Mesh).geometry,
      [DieTypes.D4]: (dieGLTF.scene.getObjectByName("d4") as Mesh).geometry,
      [DieTypes.D6]: (dieGLTF.scene.getObjectByName("d6") as Mesh).geometry,
      [DieTypes.D8]: (dieGLTF.scene.getObjectByName("d8") as Mesh).geometry,
      [DieTypes.D10]: (dieGLTF.scene.getObjectByName("d10") as Mesh).geometry,
      [DieTypes.D12]: (dieGLTF.scene.getObjectByName("d12") as Mesh).geometry,
      [DieTypes.D20]: (dieGLTF.scene.getObjectByName("d20") as Mesh).geometry,
    }),
    [dieGLTF]
  );

  const materialMap = useMemo(
    () =>
      texturesReady && {
        [DieTypes.D2]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D2],
        }),
        [DieTypes.D4]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D4],
        }),
        [DieTypes.D6]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D6],
        }),
        [DieTypes.D8]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D8],
        }),
        [DieTypes.D10]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D10],
        }),
        [DieTypes.D12]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D12],
        }),
        [DieTypes.D20]: new MeshStandardMaterial({
          map: texMap.current[DieTypes.D20],
        }),
      },
    [texturesReady]
  );

  const meshFactoryMap = useMemo(
    () =>
      materialMap &&
      Object.fromEntries(
        Object.values(DieTypes).map((type) => [
          type,
          () => new Mesh(geometryMap[type], materialMap[type]),
        ])
      ),
    [geometryMap, materialMap]
  );

  return meshFactoryMap;
}
