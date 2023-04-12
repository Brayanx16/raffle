import { useListParticipant } from "../../state/hooks/useListParticipant";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import ListParticipant from "./index";

jest.mock("../../state/hooks/useListParticipant", () => {
  return { useListParticipant: jest.fn() };
});

describe("The behavior of 'ListParticipant.tsx when empty", () => {
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue([]);
  });

  test("When start the component, the list participant must start empty", () => {
    render(
      <RecoilRoot>
        <ListParticipant />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(0);
  });
});

describe("The behavior of 'ListParticipant.tsx when populated", () => {
  const participants = ["Brayan", "Juliana"];
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue(participants);
  });

  test("A completed list participats", () => {
    render(
      <RecoilRoot>
        <ListParticipant />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole("listitem");

    expect(itens).toHaveLength(participants.length);
  });
});
