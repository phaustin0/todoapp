import React from "react";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex items-center justify-between w-screen h-screen bg-gray-100 select-none">
      {/* Sidebar Section */}
      <Sidebar />

      {/* Main Section */}
    </div>
  );
};

export default App;
