import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg shadow-lg p-4 bg-white">
      <img src={recipe.imgUrl} alt={recipe.name} className="w-full h-48 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{recipe.name}</h2>
      <p className="text-gray-600">By {recipe.chef}</p>
      <p className="text-yellow-500 font-semibold">⭐ {recipe.avgRating} ({recipe.totalRatings} ratings)</p>
      <p className="text-gray-700 mt-2">{recipe.description}</p>
      <p className="text-gray-500 text-sm">{recipe.mealType} | {recipe.dishType}</p>
    </div>
  );
};

export default RecipeCard;
