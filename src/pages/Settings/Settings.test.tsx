import { render } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Settings from "./index";

const mockNavigation = jest.fn();

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
