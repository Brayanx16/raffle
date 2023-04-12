import { createRuffle } from "./createRaffle";

describe("The behavior of 'Settings.tsx'", () => {
  test("It should render correctly", () => {
    const participants = [
      "Ana",
      "Brayan",
      "Brendon",
      "Bruno",
      "João",
      "Juliana",
    ];

    const ruffle = createRuffle(participants);
    participants.forEach((item) => {
      const friendSecret = ruffle.get(item);
      expect(friendSecret).not.toEqual(item);
    });
  });
});
