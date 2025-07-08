import React, { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    setTodos((prevTodos) =>
      prevTodos.concat({
        text: input,
        id: Date.now(),
      })
    );
    setInput('');
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md sm:max-w-lg bg-white/20 backdrop-blur-md border border-white/30 p-6 sm:p-8 rounded-3xl shadow-2xl">
        <h1 className="text-xl sm:text-3xl font-bold text-white text-center mb-6 drop-shadow">
          🌟 Todo App
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Todo..."
            className="flex-1 px-4 py-2 rounded-lg bg-white/80 placeholder-gray-600 text-gray-800 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {todos.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white/90 px-4 py-2 rounded-lg shadow-md"
            >
              <span className="text-gray-800 break-words max-w-[80%]">{item.text}</span>
              <button
                onClick={() => removeTodo(item.id)}
                className="text-red-500 hover:text-red-700 font-bold text-lg"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;


