import React, { useState } from "react";

const SelectButton = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const HandleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option) => {
    onSelect(option);
    setIsOpen(false);
  };
  return (
    <div className="m-3 relative">
      <button
        onClick={HandleSelect}
        className="text-white bg-red-800 rounded-lg px-3 py-1 m-2 flex items-center"
      >
        Select Category
        <svg
          className={`ml-2 w-4 h-4 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-2  z-50 px-3 w-40 bg-white border border-gray-300 rounded-md shadow-lg py-2 cursor-pointer ">
          <li
            onClick={() => handleItemClick("Movie")}
            className="hover:bg-red-800  px-2 py-1   rounded-lg"
          >
            Movies
          </li>
          <li
            onClick={() => handleItemClick("Series")}
            className="hover:bg-red-800  px-2 py-1   rounded-lg"
          >
            Series
          </li>
          <li
            onClick={() => handleItemClick("Episode")}
            className="hover:bg-red-800  px-2 py-1   rounded-lg"
          >
            Episode
          </li>
        </ul>
      )}
    </div>
  );
};

export default SelectButton;
