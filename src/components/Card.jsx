import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import dummyImage from "../assets/dummy_image.jpg";
import { useSelector } from "react-redux";

const Card = ({ group, groupDesc, terms, image, id }) => {
  console.log(id, "id");
  // const data = { group, groupDesc };
  console.log("asdfadf", group, groupDesc);
  return (
    <div
      className="sm:w-72 w-full md:w-80 lg:w-80 mx-auto sm:mx-0 bg-white border border-gray-300 shadow-sm rounded-md p-5"
      id={id}
    >
      <div className="flex items-center gap-5">
        <div>
          <img
            className="w-14 aspect-square rounded-full"
            src={!image ? dummyImage : image}
            alt="flashcard-profile"
            title="flashcard-profile"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="font-bold text-lg">{group}</h2>
          <span className="text-gray-500 font-semibold">
            {terms.length} {terms.length <= 1 ? "Term" : "Terms"}
          </span>
        </div>
      </div>

      <div className="my-4">
        <p className="text-gray-600 line-clamp-2">{groupDesc}</p>
        <Link
          to={`/dashboard/${id}`}
          className="flex items-center gap-5 mt-5 text-red-600 font-semibold"
          title="view card details"
          // state={data}
        >
          View Card
          <i>
            <BsArrowRight />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default Card;
