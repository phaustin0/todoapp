import React from "react";
import SidebarHeader from "./SidebarHeader";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  return (
    <section className="flex flex-col w-1/6 bg-gray-800 h-full text-white border-r-2 border-gray-300">
      {/* Header */}
      <SidebarHeader />

      {/* Categories */}
      <CategoryList />
    </section>
  );
};

export default Sidebar;
