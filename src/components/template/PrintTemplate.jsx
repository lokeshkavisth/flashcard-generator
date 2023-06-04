import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PrintTemplate = ({ pdfRef }) => {
  const { flashcards } = useSelector((state) => state.flashCardData);
  const params = useParams();
  const { id } = params;

  return (
    <div className="hidden">
      {flashcards.map((item) => {
        if (item.id == id) {
          return (
            <div
              ref={pdfRef}
              key={item.id}
              className="bg-white p-4 sm:p-8 max-w-4xl"
            >
              <div className="space-y-10">
                <div className="flex items-center flex-col md:flex-row gap-5 sm:flex-row">
                  <div>
                    <img
                      src={item.groups.Profile}
                      alt="Group_image"
                      className="w-52 aspect-square rounded-md object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xl text-center sm:text-left">
                      {item.groups.group}
                    </h2>
                    <p className="text-gray-600">{item.groups.groupDesc}</p>
                  </div>
                </div>

                <div>
                  <ul className="space-y-6 flex flex-col">
                    {item.terms.map(({ term, defination, image }, index) => (
                      <li key={index}>
                        <div className="flex gap-3 mb-4">
                          <span className="w-7 h-7 rounded-full aspect-square bg-blue-500 text-white grid place-items-center">
                            1
                          </span>
                          <h3 className="font-semibold">{term}</h3>
                        </div>

                        <div className="text-center">
                          <div>
                            <img
                              src={image}
                              alt="Group_image"
                              className="w-40 aspect-square object-cover rounded-md float-left mr-2 mb-2 mt-2"
                            />
                          </div>
                          <div>
                            <p className="text-gray-600 text-justify">
                              {defination}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default PrintTemplate;
