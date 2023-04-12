import { useListParticipant } from "../../state/hooks/useListParticipant";
import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Footer from "./index";

const mockNavigation = jest.fn();
const mockRuffle = jest.fn();

jest.mock("../../state/hooks/useListParticipant", () => {
  return { useListParticipant: jest.fn() };
});

jest.mock("../../state/hooks/useRaffle", () => {
  return { useRaffle: () => mockRuffle };
});

jest.mock("react-router-dom", () => {
  return { useNavigate: () => mockNavigation };
});

describe("When there aren't enough participants", () => {
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue([]);
  });

  test("The joke cannot be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});

describe("When exist enough participants", () => {
  const participants = ["Brayan", "Juliana", "Brendon", "Bruno"];
  beforeEach(() => {
    (useListParticipant as jest.Mock).mockReturnValue(participants);
  });

  test("The joke can be started", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");

    expect(button).not.toBeDisabled();
  });

  test("The joke start", () => {
    render(
      <RecoilRoot>
        <Footer />
      </RecoilRoot>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
    expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
    expect(mockRuffle).toHaveBeenCalledTimes(1);
  });
});
