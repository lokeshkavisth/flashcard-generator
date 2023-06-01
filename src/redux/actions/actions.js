// export const addNewTerm = (newTerm) => {
//   return {
//     type: "ADD_NEW_TERM",
//     payload: newTerm,
//   };
// };

export const createFlashcard = (newTerm) => {
  return {
    type: "CREATE_FLASHCARD",
    payload: newTerm,
  };
};
