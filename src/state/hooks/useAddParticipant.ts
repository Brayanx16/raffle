import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, listParticipant } from "../atom";

export const useAddParticipant = () => {
  const setError = useSetRecoilState(errorState);
  const setList = useSetRecoilState(listParticipant);
  const list = useRecoilValue(listParticipant);

  return (name: string) => {
    if (list.includes(name)) {
      setError("Nomes duplicados não são permitidos !");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }
    return setList((oldList) => [...oldList, name]);
  };
};
