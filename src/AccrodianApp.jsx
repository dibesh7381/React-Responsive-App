import React, { useState } from 'react';

const AccrodianApp = ({ title, content }) => {
  const [isActive, setActive] = useState(false);

  return (
    <section className="max-w-xl mx-auto mb-4 rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden">
      <div
        className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setActive(!isActive)}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <button
          className={`w-8 h-8 rounded-full flex items-center justify-center text-gray-700 text-2xl transition-transform duration-300 ease-in-out ${
            isActive ? 'rotate-45' : 'rotate-0'
          }`}
        >
          +
        </button>
      </div>

      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isActive ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'
        }`}
      >
        <p className="text-gray-600 text-base leading-relaxed">{content}</p>
      </div>
    </section>
  );
};

export default AccrodianApp;





