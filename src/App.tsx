import React, { useState } from 'react';
import { RecipeList } from './components/RecipeList';
import { RecipeForm } from './components/RecipeForm';
import { Recipe } from './services/api';
import { UtensilsIcon } from 'lucide-react';

function App() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEditRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsFormOpen(true);
  };

  const handleAddNewRecipe = () => {
    setSelectedRecipe(null);
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <header className="bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UtensilsIcon className="h-8 w-8" />
            <h1 className="text-2xl font-bold">Recipe Manager</h1>
          </div>
          <button
            onClick={handleAddNewRecipe}
            className="bg-white text-orange-600 font-medium py-2 px-4 rounded-lg 
                      hover:bg-orange-50 transition-colors duration-200 shadow-sm"
          >
            Add New Recipe
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {isFormOpen ? (
          <RecipeForm recipe={selectedRecipe} onClose={handleCloseForm} />
        ) : (
          <RecipeList onEditRecipe={handleEditRecipe} />
        )}
      </main>

      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Recipe Manager - Final Exam Project</p>
        </div>
      </footer>
    </div>
  );
}

export default App;