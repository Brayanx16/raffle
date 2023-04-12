import { atom } from "recoil";

export const listParticipant = atom<string[]>({
  key: "listParticipant",
  default: [],
});

export const resultSecretFriend = atom<Map<string, string>>({
  key: "resultSecretFriend",
  default: new Map(),
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});
