import React from 'react';

const InfoCard = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center justify-between space-y-6 text-center">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Explore the Future of Tech
        </h1>

        {/* Paragraph */}
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl">
          Stay ahead with the latest trends, innovations, and insights shaping tomorrow's digital world.
        </p>

        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95">
          Read More
        </button>
      </div>
    </div>
  );
};

export default InfoCard;


