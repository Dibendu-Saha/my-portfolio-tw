import React from "react";
import Home from "./components/Home";
import "./App.scss";

const App = () => {
  return (
    <div className="mx-auto my-0 h-screen bg-gradient-to-r from-gray-200 to-yellow-300 px-10 py-20 md:px-20">
      <Home />
    </div>
  );
};

export default App;
