import React, { useState } from 'react';

const ToggleBackground = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("green");
  const [buttonStyle, setButtonStyle] = useState("white");

  const handleClick = () => {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setTextColor(textColor === "green" ? "blue" : "green");
    setButtonStyle(buttonStyle === "white" ? "black" : "white");
  };

  return (
    <>
      <div
        className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ease-in-out ${
          backgroundColor === "white" ? "bg-white" : "bg-black"
        } ${textColor === "green" ? "text-green-500" : "text-blue-500"}`}
      >
        <button
          onClick={handleClick}
          className={`px-6 py-2 mb-8 rounded-xl border-2 font-semibold 
            transition-all duration-300 ease-in-out 
            ${buttonStyle === "white" ? "bg-white" : "bg-black"} 
            ${textColor === "green" ? "text-green-500 border-green-500 hover:shadow-green-400/40" : "text-blue-500 border-blue-500 hover:shadow-blue-400/40"}
            hover:scale-105 hover:shadow-lg active:scale-95`}
        >
          {backgroundColor === "white" ? "Black Theme" : "White Theme"}
        </button>

        <section className="animate-fade-in-up transition-all duration-700 ease-out text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-md">
            Welcome to a Real World
          </h1>
        </section>
      </div>
    </>
  );
};

export default ToggleBackground;


