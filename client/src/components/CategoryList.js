import React, { useState } from "react";
import AddCategory from "./AddCategory";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="">
      {/* Title */}
      <section
        onClick={toggleIsOpen}
        className={`transition-all duration-200 p-6 flex items-center justify-between cursor-pointer hover:bg-gray-700 ${
          isOpen ? "border-b-2 border-gray-600" : ""
        }`}
      >
        <h2 className="text-lg font-semibold">Categories</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-all duration-200 text-gray-400 ${
            isOpen ? "-rotate-90" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </section>

      {/* Category List Items */}
      {isOpen && (
        <section>
          {/* Add Category */}
          <AddCategory />

          {/* List */}
          <CategoryListItem title="All" />
          <CategoryListItem title="Home" />
          <CategoryListItem title="School" />
          <CategoryListItem title="Work" />
        </section>
      )}
    </section>
  );
};

export default CategoryList;
