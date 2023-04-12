import { useListParticipant } from "../../state/hooks/useListParticipant";
import { useRaffle } from "../../state/hooks/useRaffle";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const Footer = () => {
  const participants: string[] = useListParticipant();
  const navigate = useNavigate();
  const raffle = useRaffle();

  const start = () => {
    raffle();
    navigate("/sorteio");
  };

  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        disabled={participants.length < 3}
        onClick={start}
      >
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;
