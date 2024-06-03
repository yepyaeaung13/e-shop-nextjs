"use client";
import { useContext, useLayoutEffect, useState } from "react";
import { categoryContext } from "../../context/CategoryProvider";

const FilterItems = ({ updateFilterProducts }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { categories } = useContext(categoryContext);

  return (
    <div className="pb-2 border-b border-gray-300">
      <div className="flex justify-between" onClick={handleOpen}>
        <span className="md:text-md text-sm font-bold font-serif">
          Categories
        </span>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4"
          >
            {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4"
          >
            {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        )}
      </div>
      {/* categories  */}
      <div
        className={`p-2 text-sm flex flex-col gap-2 ${
          isOpen === false ? "hidden" : ""
        }`}
      >
        {categories.map((category, idx) => {
          return (
            <ul key={idx} className="flex flex-col gap-1 justify-center">
              <li
                onClick={() => {
                  updateFilterProducts(category);
                }}
                className="cursor-pointer md:text-sm text-xs"
              >
                {category}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FilterItems;
