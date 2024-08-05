import React from "react";
import Home from "./components/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="mx-auto my-0 min-h-screen bg-gradient-to-r from-gray-200 to-yellow-300 p-20">
      {/* <div className="h-screen w-full border border-red-600"></div>
      <div className="h-screen w-full border border-green-700"></div> */}

      <Home />
    </div>
  );
};

export default App;
