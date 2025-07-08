import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleSubmit = (e) => {
    if (e.target.className.includes('container')) {
      setShowInput(false);
      setBgColor('white');
    }
  };

  return (
    <>
        <div className='flex items-center justify-center h-screen w-screen'>
                <section
      className={`container flex items-center gap-2 transition-all duration-500 ease-in-out 
                  ${showInput ? 'w-72' : 'w-12'} 
                  px-3 py-2 rounded-full shadow-md cursor-pointer
                  ${bgColor === 'white' ? 'bg-white' : 'bg-gray-100'}`}
      onClick={handleSubmit}
    >
      {showInput ? (
        <input
          type="text"
          placeholder="Search..."
          autoFocus
          className="flex-grow bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      ) : (
        <FaSearch
          onClick={() => {
            setShowInput(true);
            setBgColor('white');
          }}
          className="text-gray-500 hover:text-blue-500 transition duration-200"
        />
      )}
    </section>
        </div>
    </>
    
  );
};

export default HiddenSearchBar;

