import { render, screen } from "@testing-library/react";
import MyFlashcard from "../pages/MyFlashcard";
import { Provider } from "react-redux";
import store from "../store";
import React from "react";

describe("MyFlashcard", () => {
  //   function renderWithContext(element = React.ReactElement) {
  //     render(
  //       <Provider store={store}>
  //         <BrowserRouter>{element}</BrowserRouter>
  //       </Provider>
  //     );
  //   }

  //   const initialVal = ;
  // const stateSetter = jest.fn();

  it.only("Card should be render", () => {
    // const [myState, setMyState] = React.useState(null);
    // setMyState({
    //   flashCardData: {
    //     flashcards: [
    //       {
    //         id: 0,
    //         groups: {
    //           group: "",
    //           groupDesc: "",
    //           Profile: "",
    //         },
    //         terms: [
    //           {
    //             term: "",
    //             defination: "",
    //             image: "",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // });

    render(
      <Provider store={store}>
        <MyFlashcard />,
      </Provider>
    );
  });

  const cardContainer = screen.getByTestId("go-to-home");
  expect(cardContainer).toHaveTextContent(/create flashcard/i);
});
