import * as Yup from "yup";

export const flashcardSchema = Yup.object().shape({
  groups: Yup.object().shape({
    group: Yup.string().required("Required"),
  }),
  terms: Yup.array(
    Yup.object().shape({
      term: Yup.string().required("Required"),
      defination: Yup.string().required("Required"),
    })
  ),
});
