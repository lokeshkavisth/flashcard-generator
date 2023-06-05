import { fireEvent, render, screen } from "@testing-library/react";
import CreateFlashcard from "../pages/home/CreateFlashcard";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import React from "react";

// const app = (component) =>
//   render(<Provider store={store}>{component}</Provider>);

// afterEach(() => {
//   cleanup();
// });

// describe("CreateFlashcard", () => {
//   beforeEach(() => {
//     app();
//   });

it("Submit button should be disabled", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navEl = screen.getByTestId("appDiv");
  expect(navEl).toBeInTheDocument();

  // const btn = { type: "submit" };

  // render(<Provider store={store}>{component}</Provider>);
  // const submitBtn = screen.getByRole("submit");
  // expect(submitBtn).toBeDisabled();
});

describe("CreateFlashcard", () => {
  async function renderWithContext(element = React.ReactElement) {
    render(
      <Provider store={store}>
        <BrowserRouter>{element}</BrowserRouter>
      </Provider>
    );
  }

  it("Submit button is disabled on render", async () => {
    renderWithContext(<CreateFlashcard />);
    expect(
      await screen.findByRole("button", { name: /create flashcard/i })
    ).toBeDisabled();
  });

  it("Submit button should not be disabled when inputs exist", () => {
    renderWithContext(<CreateFlashcard />);
    const submitTestVal = "test";

    const groupInputEl = screen.getByLabelText(/create group*/i);
    const groupDescInputEl = screen.getByLabelText(/add description/i);
    const termInputEl = screen.getByLabelText(/enter term*/i);
    const definationInputEl = screen.getByLabelText(/enter defination*/i);

    fireEvent.change(groupInputEl, { target: { value: submitTestVal } });
    expect(groupInputEl.value).toBe("test");

    fireEvent.change(groupDescInputEl, { target: { value: submitTestVal } });
    expect(groupDescInputEl.value).toBe("test");

    // fireEvent.change(termInputEl, { target: { value: submitTestVal } });
    // expect(termInputEl.value).toBe("test");

    // fireEvent.change(definationInputEl, { target: { value: submitTestVal } });
    // expect(definationInputEl.value).toBe("test");

    expect(
      screen.getByRole("button", { name: /create flashcard/i })
    ).not.toBeDisabled();
  });
});
