import React, { useState } from "react";
import recipesData from "../data";
import RecipeCard from "../RecipeCard";
import './index.css';

const RecipeList = () => {
    const [recipes, setRecipes] = useState(recipesData);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("");
    const [filters, setFilters] = useState({ attributes: [], mealType: [], dishType: [] });

    
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        filterRecipes(query, sortOption, filters);
    };

    
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);
        filterRecipes(searchQuery, option, filters);
    };

    const toggleFilter = (category, value) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [category]: prev[category].includes(value) ? prev[category].filter((v) => v !== value) : [...prev[category], value] };
            filterRecipes(searchQuery, sortOption, newFilters);
            return newFilters;
        });
    };

    
    const clearFilters = () => {
        setFilters({ attributes: [], mealType: [], dishType: [] });
        filterRecipes(searchQuery, sortOption, { attributes: [], mealType: [], dishType: [] });
    };

    const filterRecipes = (query, sort, activeFilters) => {
        let filteredRecipes = recipesData.filter((recipe) =>
            recipe.name.toLowerCase().includes(query) ||
            recipe.chef.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query)
        );

        if (activeFilters.attributes.length)
            filteredRecipes = filteredRecipes.filter((r) => activeFilters.attributes.some((a) => r.attributes.includes(a)));
        if (activeFilters.mealType.length)
            filteredRecipes = filteredRecipes.filter((r) => activeFilters.mealType.some((m) => r.mealType === m));
        if (activeFilters.dishType.length)
            filteredRecipes = filteredRecipes.filter((r) => activeFilters.dishType.some((d) => r.dishType === d));

        if (sort === "newest") filteredRecipes.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        if (sort === "oldest") filteredRecipes.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
        if (sort === "highest") filteredRecipes.sort((a, b) => b.rating - a.rating);
        if (sort === "lowest") filteredRecipes.sort((a, b) => a.rating - b.rating);

        setRecipes(filteredRecipes);
    };

    return (
        <div className="recipe-list-container">
            <div className="recipe-collection">
                <h2 className="recipe-title">Recipe Collection</h2>
                
            
                <div className="recipe-controls">
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <select onChange={handleSort}>
                        <option value="">Sort By</option>
                        <option value="newest">Newest</option>
                        <option value="oldest">Oldest</option>
                        <option value="highest">Highest Rating</option>
                        <option value="lowest">Lowest Rating</option>
                    </select>
                    <button onClick={clearFilters}>Clear Filters</button>
                </div>

                
                <div className="filter-buttons">
                    {Object.keys(filters).map((category) =>
                        filters[category].map((filter) => (
                            <button key={filter} onClick={() => toggleFilter(category, filter)}>
                                {filter} ✕
                            </button>
                        ))
                    )}
                </div>

               
                <div className="recipe-grid">
                    {recipes.length > 0 ? (
                        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
                    ) : (
                        <p className="no-recipes">No recipes available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RecipeList;
