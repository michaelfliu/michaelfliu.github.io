import {
  BoxGeometry,
  CylinderGeometry,
  DodecahedronGeometry,
  IcosahedronGeometry,
  OctahedronGeometry,
  TetrahedronGeometry,
} from "three";
import { PentagonalTrapezohedronGeometry } from "./PentagonalTrapezohedron";

export enum DieTypes {
  D2 = "D2",
  D4 = "D4",
  D6 = "D6",
  D8 = "D8",
  D10 = "D10",
  D12 = "D12",
  D20 = "D20",
}

export const keyMap = [
  { name: DieTypes.D2, keys: ["1"] },
  { name: DieTypes.D4, keys: ["2"] },
  { name: DieTypes.D6, keys: ["3"] },
  { name: DieTypes.D8, keys: ["4"] },
  { name: DieTypes.D10, keys: ["5"] },
  { name: DieTypes.D12, keys: ["6"] },
  { name: DieTypes.D20, keys: ["7"] },
];

export const baseGeometryMap = {
  [DieTypes.D2]: new CylinderGeometry(1, 1, 0.1),
  [DieTypes.D4]: new TetrahedronGeometry(),
  [DieTypes.D6]: new BoxGeometry(),
  [DieTypes.D8]: new OctahedronGeometry(),
  [DieTypes.D10]: new PentagonalTrapezohedronGeometry(),
  [DieTypes.D12]: new DodecahedronGeometry(),
  [DieTypes.D20]: new IcosahedronGeometry(),
};
