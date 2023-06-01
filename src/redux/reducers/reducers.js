const initState = {
  flashCard: [],
  // term: [Date.now()],
};

export const flashCardData = (state = initState, { type, payload }) => {
  switch (type) {
    // case "ADD_NEW_TERM":
    //   return {
    //     ...state,
    //     term: [...state.term, payload],
    //   };
    case "CREATE_FLASHCARD":
      return {
        ...state,
        flashCard: [...state.flashCard, payload],
      };
    default:
      return state;
  }
};
