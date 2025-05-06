import React, { useState, useEffect } from 'react';
import { createRecipe, updateRecipe, Recipe } from '../services/api';
import { X } from 'lucide-react';

interface RecipeFormProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeForm: React.FC<RecipeFormProps> = ({ recipe, onClose }) => {
  const [formData, setFormData] = useState<Recipe>({
    name: '',
    ingredients: '',
    instructions: '',
    prepTime: 0
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Recipe, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isEditMode = !!recipe;

  useEffect(() => {
    if (recipe) {
      setFormData(recipe);
    }
  }, [recipe]);

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof Recipe, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Recipe name is required';
    }
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    }
    
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Instructions are required';
    }
    
    if (!formData.prepTime || formData.prepTime <= 0) {
      newErrors.prepTime = 'Prep time must be greater than 0';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'prepTime' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      if (isEditMode) {
        await updateRecipe(formData);
      } else {
        await createRecipe(formData);
      }
      onClose();
      // In a real app, we would invalidate the cache or refetch the data
    } catch (error) {
      console.error('Error saving recipe:', error);
      setSubmitError('Failed to save recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 relative">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        aria-label="Close form"
      >
        <X className="h-6 w-6" />
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {isEditMode ? 'Edit Recipe' : 'Add New Recipe'}
      </h2>
      
      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {submitError}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Recipe Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="prepTime" className="block text-gray-700 font-medium mb-2">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            value={formData.prepTime}
            onChange={handleChange}
            min="1"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.prepTime ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
          />
          {errors.prepTime && <p className="text-red-500 text-sm mt-1">{errors.prepTime}</p>}
        </div>
        
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 font-medium mb-2">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
            placeholder="List ingredients separated by commas"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-medium mb-2">
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            rows={6}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 
                      ${errors.instructions ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-orange-200'}`}
            placeholder="Step-by-step instructions"
          />
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors
                      ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Saving...' : isEditMode ? 'Update Recipe' : 'Add Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
};