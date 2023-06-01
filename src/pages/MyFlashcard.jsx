import React from "react";
import Card from "../components/Card";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const MyFlashcard = () => {
  const { flashCard } = useSelector((state) => state.flashCardData);
  // console.log(flashCard);

  return (
    <div className="flex gap-3 flex-wrap mx-auto ">
      {flashCard.length <= 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 text-center mx-auto">
          <p className="text-black text-2xl">You don't have any flashcards</p>
          <NavLink
            to={"/"}
            className={
              "px-6 py-2 bg-red-500 rounded-md text-xl font-semibold text-white hover:bg-red-700 transition-all"
            }
          >
            Create Flashcard
          </NavLink>
        </div>
      ) : (
        flashCard.map(({ id, groups, terms }) => (
          <Card
            key={id}
            id={id}
            group={groups.group}
            groupDesc={groups.groupDesc}
            terms={terms}
            image={groups.Profile}
          />
        ))
      )}
    </div>
  );
};

export default MyFlashcard;
