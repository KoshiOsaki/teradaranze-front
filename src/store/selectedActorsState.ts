import { atom } from "recoil";
import { Img } from "../types/img";

export const selectedActorsState = atom<Img[]>({
  key: "selectedActorsState",
  default: [],
});
