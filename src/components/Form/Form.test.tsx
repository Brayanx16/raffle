import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Form from "./index";

//# The description of the tested component'
describe("The behavior of 'Form.tsx'", () => {
  //# A description of the test'
  test("When empty input, new participants cannot be added", () => {
    //# Render the component we are going to test
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );
    //# Performing actions (Ex: Clicks, Defining values)
    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");
    //# Stating what we want
    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("Add a participant if there is a name filled in", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Brayan",
      },
    });
    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
  });

  test("Duplicate names cannot be added to the list", () => {
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Brayan",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Brayan",
      },
    });
    fireEvent.click(button);

    const msgErro = screen.getByRole("alert");

    expect(msgErro.textContent).toBe("Nomes duplicados não são permitidos !");
  });

  test("The error msg must disappear after timers", () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Form />
      </RecoilRoot>
    );

    const input = screen.getByPlaceholderText(
      "Insira os nomes dos participantes"
    );
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Brayan",
      },
    });
    fireEvent.click(button);
    fireEvent.change(input, {
      target: {
        value: "Brayan",
      },
    });
    fireEvent.click(button);

    let msgErro = screen.queryByRole("alert");
    expect(msgErro).toBeInTheDocument();

    act(() => {
      jest.runAllTimers();
    });

    msgErro = screen.queryByRole("alert");
    expect(msgErro).toBeNull();
  });
});
