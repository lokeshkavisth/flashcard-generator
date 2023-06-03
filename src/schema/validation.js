import * as Yup from "yup";

// validation methods for the flashcard form using Yup

export const flashcardSchema = Yup.object().shape({
  groups: Yup.object().shape({
    group: Yup.string()
      .max(20, "You have reached the max length")
      .required("Required"),
  }),
  terms: Yup.array(
    Yup.object().shape({
      term: Yup.string()
        .max(60, "You have reached the max length")
        .required("Required"),
      defination: Yup.string()
        .max(800, "You have reached the max length")
        .required("Required"),
    })
  ),
});
