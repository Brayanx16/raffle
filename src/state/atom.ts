import { atom } from "recoil";

export const listParticipant = atom<string[]>({
  key: "listParticipant",
  default: [],
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
