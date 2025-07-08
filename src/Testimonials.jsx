import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    { name: "Ananya Sharma", role: "Frontend Developer" },
    { name: "Neha Verma", role: "Frontend Developer" },
    { name: "Rahul Mehta", role: "Product Manager" },
    { name: "Sneha Kapoor", role: "Product Manager" },
    { name: "Rohit Sinha", role: "Frontend Developer" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 px-4 py-10">
      <div className="bg-white/30 backdrop-blur-lg shadow-2xl rounded-3xl p-8 max-w-md w-full text-center transition-all duration-500 ease-in-out">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 tracking-wide">{testimonials[currentIndex].name}</h2>
        <p className="text-base text-gray-700 italic mb-6">— {testimonials[currentIndex].role}</p>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={handlePrevClick}
            className="group px-4 py-2 bg-white rounded-full border border-gray-300 shadow-md hover:bg-gray-100 active:scale-95 transition transform duration-300"
          >
            <FaArrowLeft className="text-gray-600 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={handleNextClick}
            className="group px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 active:scale-95 transition transform duration-300"
          >
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


