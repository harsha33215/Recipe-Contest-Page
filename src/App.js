import React from "react";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import recipes from "./components/data";


const App = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-6">Recipe Collection</h1>
        <RecipeList recipes={recipes} /> 
      </div>
    </>
  );
};

export default App;
