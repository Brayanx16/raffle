import { useRecoilValue } from "recoil";
import { errorState } from "../atom";

export const useMsgErro = () => useRecoilValue(errorState);
