import React, { useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const display = (value) => {
    setInputValue(inputValue + value);
  };

  const calc = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch {
      setInputValue('Error');
    }
  };

  const clear = () => setInputValue('');

  // 🔁 Common button style
  const btn =
    'text-white text-xl font-semibold flex items-center justify-center h-14 rounded-lg cursor-pointer hover:scale-105 transition';

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-300 via-purple-200 to-pink-200 flex items-center justify-center p-4">
      <form
        action=""
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm grid grid-cols-4 gap-3"
      >
        <input
          type="text"
          value={inputValue}
          className="col-span-4 text-right text-2xl px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 shadow-inner focus:outline-none"
          readOnly
        />

        {/* Row 1 */}
        <span onClick={clear} className={`${btn} bg-red-500`}>
          C
        </span>
        <span onClick={() => display('/')} className={`${btn} bg-blue-500`}>
          /
        </span>
        <span onClick={() => display('*')} className={`${btn} bg-blue-500`}>
          *
        </span>
        <span onClick={() => display('-')} className={`${btn} bg-blue-500`}>
          -
        </span>

        {/* Row 2 */}
        <span onClick={() => display('7')} className={`${btn} bg-gray-800`}>
          7
        </span>
        <span onClick={() => display('8')} className={`${btn} bg-gray-800`}>
          8
        </span>
        <span onClick={() => display('9')} className={`${btn} bg-gray-800`}>
          9
        </span>
        <span onClick={() => display('+')} className={`${btn} bg-blue-500`}>
          +
        </span>

        {/* Row 3 */}
        <span onClick={() => display('4')} className={`${btn} bg-gray-800`}>
          4
        </span>
        <span onClick={() => display('5')} className={`${btn} bg-gray-800`}>
          5
        </span>
        <span onClick={() => display('6')} className={`${btn} bg-gray-800`}>
          6
        </span>
        <span className="invisible"></span> {/* Filler to maintain grid */}

        {/* Row 4 */}
        <span onClick={() => display('1')} className={`${btn} bg-gray-800`}>
          1
        </span>
        <span onClick={() => display('2')} className={`${btn} bg-gray-800`}>
          2
        </span>
        <span onClick={() => display('3')} className={`${btn} bg-gray-800`}>
          3
        </span>
        <span className="invisible"></span>

        {/* Row 5 */}
        <span onClick={() => display('0')} className={`${btn} bg-gray-800`}>
          0
        </span>
        <span onClick={() => display('00')} className={`${btn} bg-gray-800`}>
          00
        </span>
        <span onClick={() => display('.')} className={`${btn} bg-gray-800`}>
          .
        </span>
        <span onClick={calc} className={`${btn} bg-green-500`}>
          =
        </span>
      </form>
    </div>
  );
};

export default Calculator;


