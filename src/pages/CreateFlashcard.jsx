import React, { useEffect, useState } from "react";
import CreateGroup from "../components/CreateGroup";
import CreateTerm from "../components/CreateTerm";
import { Formik, Form, useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createFlashcard } from "../redux/actions/actions";
import Button from "../components/Button";
import { flashcardSchema } from "../schema/validation";
import Toast from "../components/Toast";

const CreateFlashcard = () => {
  const dispatch = useDispatch();
  // const [selectedImage, setSelectedImage] = useState([]);
  const [toast, setToast] = useState(false);
  const flashCard = useSelector((state) => state.flashCardData);
  console.log("flash", flashCard);

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
      validationSchema={flashcardSchema}
      onSubmit={(values, action) => {
        values.id = Date.now();
        action.resetForm();
        // values.image = selectedImage;
        dispatch(createFlashcard(values));

        setToast(true);

        setTimeout(() => {
          setToast(false);
        }, 2000);
      }}
      validateOnMount
    >
      {({ values, isValid, dirty, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <section className="mb-10 flex flex-col gap-10">
            {/* <Toast /> */}
            {toast && (
              <Toast
                fn={() => setToast(false)}
                toastClass={!toast ? "-translate-y-96" : "translate-y-0"}
              />
            )}

            {/* Create group  */}
            <CreateGroup values={values} setFieldValue={setFieldValue} />

            {/* Create Term  */}
            <CreateTerm setFieldValue={setFieldValue} values={values} />
          </section>

          <div className="mx-auto text-center">
            <Button
              disabled={isSubmitting}
              // disabled={!(isValid && dirty)}
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
