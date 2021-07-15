import React from "react";

const CategoryListItem = ({ title }) => {
  return (
    <section className="transition duration-200 cursor-pointer p-6 hover:bg-gray-700">
      <p className="text-md font-medium">{title}</p>
    </section>
  );
};

export default CategoryListItem;
