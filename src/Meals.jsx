import React, { useState, useEffect } from 'react';

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then(res => res.json())
      .then(data => setMeals(data.meals));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 p-4 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 drop-shadow-md">
        🍽️ Seafood Meals
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:rotate-[1deg]"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <div className="p-4 flex flex-col gap-2">
              <p className="text-lg font-semibold text-gray-800">{meal.strMeal}</p>
              <p className="text-sm text-gray-500">ID: #{meal.idMeal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;

