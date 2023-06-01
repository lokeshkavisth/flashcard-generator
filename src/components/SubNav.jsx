import React from "react";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  const homePages = [
    {
      title: "Create New",
      path: "/",
    },
    {
      title: "My Flashcard",
      path: "/dashboard",
    },
  ];

  return (
    <div className="mb-10">
      <div>
        <h2 className="text-3xl font-bold mb-10">Create Flashcard</h2>
      </div>

      <nav>
        <ul className="flex items-center gap-4 border-b-2 pb-2 border-gray-300">
          {homePages.map((item) => {
            return (
              <li
                key={item.title}
                className="text-lg font-semibold text-gray-500"
              >
                <NavLink to={item.path}>{item.title}</NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SubNav;
