// page for creating flashcards

import React, { useState } from "react";
import CreateGroup from "../components/CreateGroup";
import CreateTerm from "../components/CreateTerm";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createFlashcard } from "../redux/actions/actions";
import Button from "../components/Button";
import { flashcardSchema } from "../schema/validation";
import Toast from "../components/Toast";

const CreateFlashcard = () => {
  const dispatch = useDispatch();
  const [toast, setToast] = useState(false);
  const { flashcards } = useSelector((state) => state.flashCardData);
  if (flashcards.length > 0)
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

  return (
    <Formik
      initialValues={{
        id: "",
        groups: {
          group: "",
          groupDesc: "",
          Profile: null,
        },
        terms: [
          {
            term: "",
            defination: "",
            image: null,
          },
        ],
      }}
      // validating and dispatching the form data to redux state on onSubmit
      validationSchema={flashcardSchema}
      onSubmit={(values, action) => {
        values.id = Date.now();
        action.resetForm();
        dispatch(createFlashcard(values));

        setToast(true);

        setTimeout(() => {
          setToast(false);
        }, 2000);
      }}
      validateOnMount
    >
      {({ values, isValid, setFieldValue, isSubmitting }) => (
        <Form>
          <section className="mb-10 flex flex-col gap-10">
            {/* toast component for let user know that their flashcard is created */}
            {toast && (
              <Toast
                fn={() => setToast(false)}
                toastClass={!toast ? "-translate-y-96" : "translate-y-0"}
              />
            )}

            {/* Create term component */}
            <CreateGroup values={values} setFieldValue={setFieldValue} />

            {/* Create term component */}
            <CreateTerm setFieldValue={setFieldValue} values={values} />
          </section>

          <div className="mx-auto text-center">
            {/* button for submiting the flashcard */}
            <Button
              disabled={isSubmitting}
              type="submit"
              btnclass={`font-semibold rounded-md text-white text-xl px-14 py-4 ${
                !isValid ? "bg-red-200" : "bg-red-600"
              }`}
              text={"Create Flashcard"}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreateFlashcard;
