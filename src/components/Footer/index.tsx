import { useNavigate } from "react-router-dom";
import { useListParticipant } from "../../state/hooks/useListParticipant";

import "./styles.css";

const Footer = () => {
  const participants: string[] = useListParticipant();
  const navigate = useNavigate();

  const start = () => {
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
