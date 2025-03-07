# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

Recipe List App

Overview

This is a React application that displays a list of recipes with filtering, sorting, and search functionalities. The app allows users to:

Search recipes by name, chef, or description.

Sort recipes by date or rating.

Apply filters based on attributes, meal type, or dish type.

Clear all applied filters.

Display recipes in a visually appealing grid layout.

Features Implemented

1. State Management

Used useState to manage the list of recipes, search query, sorting option, and filters.

setRecipes updates the state dynamically when search, sort, or filter options are changed.

2. Search Functionality

Users can type a query into the search bar, and the app will filter recipes accordingly.

3. Sorting Mechanism

Sorts recipes by:

Newest (latest upload date)

Oldest

Highest rating

Lowest rating

4. Filter System

Users can filter by:

Attributes (e.g., Spicy, Vegan)

Meal Type (e.g., Breakfast, Dinner)

Dish Type (e.g., Main Course, Dessert)

Clicking a filter toggles its selection.

The "Clear Filters" button resets all applied filters.

5. Image Rendering Fixes

Updated RecipeCard.js to ensure images render correctly.

Added an onError fallback to load a default image if the specified one is missing.

6. CSS Styling Enhancements

Improved layout with grid for responsive design.

Styled search bar, filter buttons, and recipe cards.

Applied object-fit: cover to images to prevent distortion.

7. Deployment:
   I used to deploy my project in vercel
  webiste link: https://recipe-contest-page-eight.vercel.app/
