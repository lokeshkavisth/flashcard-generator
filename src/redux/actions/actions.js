// action for creating the flashcards
export const createFlashcard = (formData) => {
  return {
    type: "CREATE_FLASHCARD",
    payload: formData,
  };
};

// action for deleting the flashcards
export const deleteFlashcard = (id) => {
  return {
    type: "DELETE_FLASHCARD",
    payload: id,
  };
};
