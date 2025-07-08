import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev + 1);
  }

  function decrease() {
    setCount(prev => prev - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200">
      <div className="bg-white p-10 rounded-2xl flex items-center flex-col shadow-2xl text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6 drop-shadow">
          Value is {count}
        </h1>
        <div className="flex space-x-6">
          <button
            onClick={decrease}
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-400 to-pink-500 hover:from-red-500 hover:to-pink-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            −
          </button>
          <button
            onClick={increase}
            className="px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;


