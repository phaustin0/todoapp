import React from "react";

const SidebarHeader = () => {
  return (
    <section className="flex items-center justify-between bg-gray-900 w-full h-24 px-6">
      {/* Title */}
      <h1 className="text-2xl font-bold">Todo App</h1>

      {/* Image */}
      <img
        src="https://avatars.githubusercontent.com/phaustin0"
        alt="profile"
        className="w-12 h-12 rounded-full"
      />
    </section>
  );
};

export default SidebarHeader;
