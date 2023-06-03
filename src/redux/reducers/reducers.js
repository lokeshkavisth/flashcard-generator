// retrieving data from the localStore
const localStoreData = JSON.parse(localStorage.getItem("flashcards"));
const initState = {
  // if data is there in localStorage then retrieve else push data in localStorage from redux
  flashcards: localStoreData ? localStoreData : [],
};

// redux reducer for manupilating flashcard data
export const flashCardData = (state = initState, { type, payload }) => {
  switch (type) {
    // if action type ('CREATE_FLASHCARD') matches then push new data into state
    case "CREATE_FLASHCARD":
      return {
        ...state,
        flashcards: [...state.flashcards, payload],
      };

    // if action type ('DELETE_FLASHCARD') matches then delete data and update the state with remain data
    case "DELETE_FLASHCARD":
      // filter method for checking if id is same or not
      const remainFlashcards = state.flashcards.filter(
        (card) => card.id !== payload
      );

      // adding the remain data in localStorage
      localStorage.setItem("flashcards", JSON.stringify(remainFlashcards));

      return {
        ...state,
        flashcards: remainFlashcards,
      };
    default:
      return state;
  }
};
