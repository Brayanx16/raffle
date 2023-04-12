import { useRecoilValue } from "recoil";
import { listParticipant } from "../atom";

export const useListParticipant = () => useRecoilValue(listParticipant);
