/**
 * Recipe API service
 */

// Recipe model interface
export interface Recipe {
  id?: number;
  name: string;
  ingredients: string;
  instructions: string;
  prepTime: number;
}

// API base URL - use relative path in production, full URL in development
const API_URL = import.meta.env.PROD ? '/api' : 'http://localhost:5000/api';

// Get all recipes
export const getRecipes = async (): Promise<Recipe[]> => {
  try {
    const response = await fetch(`${API_URL}/recipes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('Failed to fetch recipes');
  }
};

// Get a single recipe by ID
export const getRecipe = async (id: number): Promise<Recipe> => {
  try {
    const response = await fetch(`${API_URL}/recipes/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw new Error('Failed to fetch recipe');
  }
};

// Create a new recipe
export const createRecipe = async (recipe: Recipe): Promise<Recipe> => {
  try {
    const response = await fetch(`${API_URL}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw new Error('Failed to create recipe');
  }
};

// Update an existing recipe
export const updateRecipe = async (recipe: Recipe): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/recipes/${recipe.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw new Error('Failed to update recipe');
  }
};

// Delete a recipe
export const deleteRecipe = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`${API_URL}/recipes/${id}`, {
      method: 'DELETE',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw new Error('Failed to delete recipe');
  }
};