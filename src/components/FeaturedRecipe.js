import React from "react";
import "./featuredrecipe.css";

const FeaturedRecipe = ({ navigateToRecipe }) => {
  const featuredRecipes = [
    {
      id: 1,
      title: "Noodles with Shrimps",
      description:
        "Delicious noodles served with succulent shrimps, garnished with fresh vegetables and a delectable sauce.",
      imageUrl: "/images/noodles-with-shrimps.jpg",
    },
    {
      id: 2,
      title: "Vegan Curry with Fresh Herbs",
      description:
        " A delightful vegan curry bursting with flavors of fresh herbs, spices, and colorful vegetables, served with fragrant rice.",

      imageUrl: "/images/vegan-curry-with-fresh-herbs.jpg",
    },
    {
      id: 3,
      title: "Meat Tacos ",
      description:
        "Tantalizing meat tacos filled with juicy seasoned meat, topped with cheese, salsa, and fresh veggies for a mouthwatering experience. ",
      imageUrl: "/images/meat-tacos.jpg",
    },
    {
      id: 4,
      title: "Fried Egg Avocado Open Sandwich",
      description:
        "A delightful open sandwich featuring a perfectly fried egg on a bed of creamy avocado slices, drizzled with a savory sauce and served on toasted artisan bread.",
      imageUrl: "/images/fried-egg-avocado-open-sandwich.jpg",
    },
  ];

  return (
    <div className="featured-recipe-section">
      <div className="featured-recipe-heading">
        <h2>Featured Recipes</h2>
        <p>
          Indulge your senses with our featured recipes – A showcase of culinary
          delights that are bound to tantalize your taste buds and ignite your
          culinary passions
        </p>
      </div>
      <div className="featured-recipe-container">
        {featuredRecipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.imageUrl} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p className="featured-recipe-description">{recipe.description}</p>
            <button className="cta-btn" onClick={() => navigateToRecipe()}>
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRecipe;
