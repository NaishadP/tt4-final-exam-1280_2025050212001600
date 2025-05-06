using Microsoft.EntityFrameworkCore;
using RecipeManager.Models;

namespace RecipeManager.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Recipe> Recipes { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Seed data
            modelBuilder.Entity<Recipe>().HasData(
                new Recipe
                {
                    Id = 1,
                    Name = "Classic Pancakes",
                    Ingredients = "1 cup all-purpose flour, 2 tablespoons sugar, 2 teaspoons baking powder, 1/2 teaspoon salt, 1 cup milk, 2 tablespoons vegetable oil, 1 egg",
                    Instructions = "1. Whisk dry ingredients. 2. Mix wet ingredients separately. 3. Combine wet and dry ingredients. 4. Cook on a hot griddle until bubbles form, then flip.",
                    PrepTime = 20
                },
                new Recipe
                {
                    Id = 2,
                    Name = "Simple Pasta Carbonara",
                    Ingredients = "8 oz spaghetti, 2 large eggs, 1/2 cup grated Parmesan cheese, 4 slices bacon, 2 cloves garlic, salt and pepper",
                    Instructions = "1. Cook pasta. 2. Fry bacon and garlic. 3. Beat eggs and cheese in a bowl. 4. Toss hot pasta with bacon, then quickly with egg mixture. 5. Season and serve immediately.",
                    PrepTime = 25
                },
                new Recipe
                {
                    Id = 3,
                    Name = "Vegetable Stir Fry",
                    Ingredients = "1 bell pepper, 1 carrot, 1 broccoli head, 2 tablespoons soy sauce, 1 tablespoon oil, 1 teaspoon garlic powder",
                    Instructions = "1. Chop all vegetables. 2. Heat oil in wok or large pan. 3. Add vegetables and stir fry for 5-7 minutes. 4. Add soy sauce and seasonings. 5. Serve hot.",
                    PrepTime = 15
                }
            );
        }
    }
}