import { atom } from "recoil";
import { Img } from "../types/img";

export const similarActorsState = atom<Img[]>({
  key: "similarActorsState",
  default: [],
});
