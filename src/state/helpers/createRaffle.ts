import shuffle from "just-shuffle";

export function createRuffle(participants: string[]) {
  const countParticipants = participants.length;
  const shuffleParticipants = shuffle(participants);
  const results = new Map<string, string>();

  for (let index = 0; index < countParticipants; index++) {
    const pIndex = index === countParticipants - 1 ? 0 : index + 1;

    results.set(shuffleParticipants[index], shuffleParticipants[pIndex]);
  }

  return results;
}
