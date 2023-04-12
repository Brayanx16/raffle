import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Settings from "./index";

const mockNavigation = jest.fn();

// jest.mock("../../state/hooks/useListParticipant", () => {
//   return { useListParticipant: jest.fn() };
// });

jest.mock("react-router-dom", () => {
  return { useNavigate: () => mockNavigation };
});

describe("The behavior of 'Settings.tsx'", () => {
  test("It should render correctly", () => {
    const { container } = render(
      <RecoilRoot>
        <Settings />
      </RecoilRoot>
    );

    expect(container).toMatchSnapshot();
  });
});

// describe("When exist enough participants", () => {
//   const participants = ["Brayan", "Juliana", "Brendon", "Bruno"];
//   beforeEach(() => {
//     (useListParticipant as jest.Mock).mockReturnValue(participants);
//   });

//   test("The joke can be started", () => {
//     render(
//       <RecoilRoot>
//         <Settings />
//       </RecoilRoot>
//     );

//     const button = screen.getByRole("button");

//     expect(button).not.toBeDisabled();
//   });

//   test("The joke start", () => {
//     render(
//       <RecoilRoot>
//         <Footer />
//       </RecoilRoot>
//     );

//     const button = screen.getByRole("button");
//     fireEvent.click(button);

//     expect(mockNavigation).toHaveBeenCalledTimes(1);
//     expect(mockNavigation).toHaveBeenCalledWith("/sorteio");
//   });
// });
