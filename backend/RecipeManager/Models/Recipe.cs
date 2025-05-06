using System.ComponentModel.DataAnnotations;

namespace RecipeManager.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; } = string.Empty;
        
        [Required]
        public string Ingredients { get; set; } = string.Empty;
        
        [Required]
        public string Instructions { get; set; } = string.Empty;
        
        [Required]
        [Range(1, 1000)]
        public int PrepTime { get; set; }
    }
}