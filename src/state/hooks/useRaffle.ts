import { useListParticipant } from "./useListParticipant";
import { createRuffle } from "../helpers/createRaffle";
import { resultSecretFriend } from "../atom";
import { useSetRecoilState } from "recoil";

export const useRaffle = () => {
  const participants = useListParticipant();
  const setResults = useSetRecoilState(resultSecretFriend);

  return () => {
    const results = createRuffle(participants);
    setResults(results);
  };
};
