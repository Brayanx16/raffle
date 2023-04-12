import { useListParticipant } from "../../state/hooks/useListParticipant";

const ListParticipant = () => {
  const participants: string[] = useListParticipant();

  return (
    <ul>
      {participants.map((participants) => (
        <li key={participants}>{participants}</li>
      ))}
    </ul>
  );
};

export default ListParticipant;
