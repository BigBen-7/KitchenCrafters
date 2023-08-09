import React, { useState } from "react";

import "./Home.css";

const categories = [
  {
    name: "Appetizers",
    imageUrl: "/images/pexels-valeria-boltneva-1893561.jpg",
  },
  {
    name: "Main Course",
    imageUrl: "/images/pair-of-rice-noodles-dishes.jpg",
  },
  {
    name: "Desserts",
    imageUrl: "/images/baked-g8ebdc4841_1280.jpg",
  },
  {
    name: "Drinks",
    imageUrl: "/images/frozen-mango-drink-in-a-restaurant.jpg",
  },
];

const CategoryHighlight = () => {
  const [highlightedCategory, setHighlightedCategory] = useState("");

  // Function to update the highlighted category
  const handleCategoryClick = (category) => {
    setHighlightedCategory(category);
  };

  return (
    <div>
      {/* used the featured-recipe heading css class */}
      <div className="category-heading">
        <h2>Category HighLight</h2>
        <p>
          Discover a world of flavors and inspirations through our handpicked
          categories, each offering a unique culinary journey that promises to
          elevate your cooking experience.
        </p>
      </div>
      <div className="category-highlight">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`category-item ${
              category.name === highlightedCategory ? "highlighted" : ""
            }`}
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.imageUrl} alt={category.name} />
            <div className="category-overlay">{category.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryHighlight;
