import React, { useEffect, useState } from 'react';
import { getRecipes, deleteRecipe, Recipe } from '../services/api';
import { Clock, Edit, Trash2 } from 'lucide-react';

interface RecipeListProps {
  onEditRecipe: (recipe: Recipe) => void;
}

export const RecipeList: React.FC<RecipeListProps> = ({ onEditRecipe }) => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      setLoading(true);
      const data = await getRecipes();
      setRecipes(data);
      setError(null);
    } catch (err) {
      setError('Failed to load recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm('Are you sure you want to delete this recipe?')) {
      return;
    }
    
    try {
      await deleteRecipe(id);
      setRecipes(recipes.filter(recipe => recipe.id !== id));
    } catch (err) {
      setError('Failed to delete recipe. Please try again.');
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  if (recipes.length === 0) {
    return (
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-medium text-gray-600 mb-4">No recipes found</h2>
        <p className="text-gray-500">Add your first recipe to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div 
          key={recipe.id} 
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{recipe.name}</h2>
            
            <div className="flex items-center text-gray-600 mb-4">
              <Clock className="h-4 w-4 mr-1" />
              <span>{recipe.prepTime} minutes</span>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium text-gray-700 mb-1">Ingredients:</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{recipe.ingredients}</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-700 mb-1">Instructions:</h3>
              <p className="text-gray-600 text-sm line-clamp-3">{recipe.instructions}</p>
            </div>
          </div>
          
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100 flex justify-end space-x-2">
            <button 
              onClick={() => onEditRecipe(recipe)}
              className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50 transition-colors"
              aria-label="Edit recipe"
            >
              <Edit className="h-5 w-5" />
            </button>
            <button 
              onClick={() => recipe.id && handleDelete(recipe.id)}
              className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50 transition-colors"
              aria-label="Delete recipe"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};