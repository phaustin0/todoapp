import React, { useState } from "react";

const AddCategory = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <section className="transition duration-200 p-6 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white">
      {/* Add Section */}
      <section
        onClick={toggleActive}
        className="flex items-center w-full h-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`h-5 w-5 transition-all duration-200 ${
            isActive ? "rotate-45" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
        <h3 className="ml-4">Add a new category</h3>
      </section>

      {/* Input Section */}
      {isActive && (
        <section className="mt-5 flex items-center space-x-2">
          {/* Input */}
          <input
            type="text"
            placeholder="Enter category name"
            className="p-3 pl-4 rounded flex-1 bg-gray-600 outline-none focus:text-white"
          />
        </section>
      )}
    </section>
  );
};

export default AddCategory;
