import Card from "../../components/Card";
import { useListParticipant } from "../../state/hooks/useListParticipant";
import { useResultRaffle } from "../../state/hooks/useResultRaffle";
import { useState } from "react";

import "./styles.css";

const Raffle = () => {
  const participants = useListParticipant();

  const [currentParticipant, setCurrentParticipant] = useState("");
  const [secretFriend, setSecretFriend] = useState("");

  const result = useResultRaffle();

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(currentParticipant)) {
      setSecretFriend(result.get(currentParticipant)!);
    }
  };

  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={raffle}>
          <select
            name="currentParticipant"
            id="currentParticipant"
            placeholder="Selecione o seu nome"
            required
            value={currentParticipant}
            onChange={(event) => setCurrentParticipant(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <button className="botao-sortear"> Sortear </button>
        </form>
        {secretFriend && (
          <p className="resultado" role="alert">
            {" "}
            {secretFriend}
          </p>
        )}
        <footer className="sorteio">
          <img
            src="/images/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Raffle;
