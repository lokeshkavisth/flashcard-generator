import React, { useState } from "react";
import { AiFillFileImage } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { TbTrashX } from "react-icons/tb";
import Button from "../components/Button";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewTerm } from "../redux/actions/actions";
// import { ErrorMessage, Field } from "formik";
import FieldInput from "../components/FieldInput";
import { FieldArray } from "formik";

const CreateTerm = ({
  selectedImage,
  setSelectedImage,
  values,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <FieldArray
        name="terms"
        render={(formHelpers) => (
          <ul className="bg-white md:p-10 rounded-md sm:p-5 p-5 shadow-md flex flex-col gap-8">
            {/* {newTerm} */}

            {values.terms.map((item, index) => (
              <li
                key={index}
                className="flex gap-5 items-start md:flex-row flex-col sm:flex-col sm:w-full"
              >
                <span className="px-4 py-2 text-xl font-bold rounded-full bg-red-200">
                  {index + 1}
                </span>
                <div className="flex items-end flex-wrap gap-5 md:flex-row sm:flex-col flex-col w-full">
                  <FieldInput
                    name={`terms.${index}.term`}
                    htmlFor={`Term${item}`}
                    label={"Enter Term"}
                    id={`Term-${item}`}
                    placeholder={"What is ISP?"}
                    // values={values}
                    // handleBlur={handleBlur}
                    // handleChange={handleChange}
                  />

                  <FieldInput
                    name={`terms.${index}.defination`}
                    htmlFor={`Defination${item}`}
                    label={"Enter Defination"}
                    id={`Defination-${item}`}
                    placeholder={"An ISP (internet service provider) is..."}
                    // values={values}
                    // handleBlur={handleBlur}
                    // handleChange={handleChange}
                  />

                  {/* ----------------- */}

                  {!item.image && (
                    <div>
                      <Button
                        type={"button"}
                        btnclass={
                          "border-2 rounded-md  min-w-max font-semibold text-lg px-6 py-2"
                        }
                        text={
                          <>
                            <label
                              htmlFor={`cardImage-${item}`}
                              className="flex items-center cursor-pointer"
                            >
                              <AiFillFileImage className="text-blue-700" />
                              Upload Image
                              <input
                                type="file"
                                id={`cardImage-${item}`}
                                name={`terms.${index}.image`}
                                hidden
                                // value=""
                                // innerRef={fileRef}
                                accept="image/*"
                                onChange={(e) => {
                                  console.log("index___", num);
                                  const file = e.target.files[0];
                                  const reader = new FileReader();
                                  reader.readAsDataURL(file);
                                  reader.onload = () => {
                                    setFieldValue(
                                      `terms.${num}.image`,
                                      reader.result
                                    );
                                  };
                                }}
                              />
                            </label>
                          </>
                        }
                      />
                    </div>
                  )}
                  {item.image && (
                    <>
                      <div>
                        <img
                          className="w-20 aspect-square rounded-md"
                          src={item.image}
                          alt="term_image"
                          loading="lazy"
                        />
                      </div>

                      <div className="flex flex-col gap-5">
                        <Button
                          type={"button"}
                          text={<TbTrashX className="text-3xl text-red-500" />}
                          fn={() => setFieldValue(`terms.${index}.image`, "")}
                        />
                        <button type="button">
                          <label htmlFor={`cardImage-${item}`}>
                            <BiEdit className="text-blue-700 text-3xl" />
                          </label>
                        </button>
                      </div>
                    </>
                  )}

                  {!index == 0 && (
                    <div>
                      <Button
                        type="button"
                        btnclass={"font-semibold text-blue-700 mt-5"}
                        fn={() => formHelpers.remove(index)}
                        text={"- Remove"}
                        list
                      />
                    </div>
                  )}
                </div>
              </li>
            ))}

            <li className="text-center md:text-left">
              <Button
                type="button"
                fn={() => {
                  formHelpers.push("");
                  setNum((prev) => prev + 1);
                }}
                btnclass={"font-semibold text-blue-700 mt-5"}
                text={"+ Add more"}
              />
            </li>
          </ul>
        )}
      ></FieldArray>
    </div>
  );
};

export default CreateTerm;
