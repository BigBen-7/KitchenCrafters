// Navbar.js
import React from "react";
import "./Navbar.css";

const Navbar = ({ setCurrentPage }) => {
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>KitchenCrafters</h2>
      </div>

      <ul className="nav-icons">
        <li>
          <button onClick={() => handleNavClick("home")}>
            <img src="/icons/home.png" alt="Home" />
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("recipe")}>
            <img src="/icons/recipe.png" alt="Recipe" />
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("categories")}>
            <img src="/icons/icons8-categorize-100.png" alt="Categories" />
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("about")}>
            <img src="/icons/info.png" alt="About" />
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("contact")}>
            <img src="/icons/circle-phone-flip.png" alt="Contact" />
          </button>
        </li>
      </ul>

      <ul className="nav-links">
        <li>
          <button onClick={() => setCurrentPage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("recipe")}>Recipe</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("categories")}>
            Categories
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("contact")}>Contact</button>
        </li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search for Recipes" />
      </div>
    </nav>
  );
};

export default Navbar;
