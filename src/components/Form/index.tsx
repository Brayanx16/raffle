import { useAddParticipant } from "../../state/hooks/useAddParticipant";
import { useMsgErro } from "../../state/hooks/useMsgErro";
import { useRef, useState } from "react";

import "./styles.css";

const Form = () => {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const msgError = useMsgErro();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addListParticipant(name);
    setName("");
    inputRef.current?.focus();
  };

  const addListParticipant = useAddParticipant();

  return (
    <form onSubmit={addParticipant}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}> Adicionar </button>
      </div>

      {msgError && (
        <p className="alerta erro" role="alert">
          {msgError}
        </p>
      )}
    </form>
  );
};

export default Form;
