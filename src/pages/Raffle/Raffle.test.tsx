import { useListParticipant } from "../../state/hooks/useListParticipant";
import { useResultRaffle } from "../../state/hooks/useResultRaffle";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Raffle from "./index";

jest.mock("../../state/hooks/useListParticipant", () => {
  return { useListParticipant: jest.fn() };
});

jest.mock("../../state/hooks/useResultRaffle", () => {
  return { useResultRaffle: jest.fn() };
});

describe("The behavior of 'Ruffle.tsx'", () => {
  const participants = ["Brayan", "Juliana", "Brendon", "Bruno"];
  const results = new Map([
    ["Brayan", "Juliana"],
    ["Brendon", "Bruno"],
    ["Mãe", "Pai"],
  ]);

  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue(participants);
    (useResultRaffle as jest.Mock).mockReturnValue(results);
  });

  test("All participants can show the secret friend", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const options = screen.queryAllByRole("option");
    expect(options).toHaveLength(participants.length + 1);
  });

  test("The secret friend is displayed when called", () => {
    render(
      <RecoilRoot>
        <Raffle />
      </RecoilRoot>
    );

    const select = screen.getByPlaceholderText("Selecione o seu nome");
    fireEvent.change(select, {
      target: {
        value: participants[0],
      },
    });
    const button = screen.getByRole("button");
    fireEvent.click(button);

    const secretFriend = screen.getByRole("alert");

    expect(secretFriend).toBeInTheDocument();
  });
});
