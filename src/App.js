import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import FeaturedRecipe from "./components/FeaturedRecipe"; // Import FeaturedRecipe component
import CategoryHighlight from "./components/CategoryHighlight";
import LatestBlogPosts from "./components/LatestBlogPosts";
import ContactSection from "./components/ContactSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import ConstructionPage from "./components/ConstructionPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigateToRecipe = () => {
    setCurrentPage("construction");
  };

  const navigateToCategories = () => {
    setCurrentPage("construction");
  };
  const navigateToContactSection = () => {
    setCurrentPage("construction");
  };
  const navigateToAboutSection = () => {
    setCurrentPage("construction");
  };

  console.log("Current Page:", currentPage);

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />

      {/* Render the Home page */}
      {currentPage === "home" && (
        <div>
          <Home navigateToRecipe={navigateToRecipe} />
          <FeaturedRecipe navigateToRecipe={navigateToRecipe} />
          <CategoryHighlight navigateToCategories={navigateToCategories} />
          <LatestBlogPosts navigateToCategories={navigateToCategories} />
          <AboutSection navigateToAboutSection={navigateToAboutSection} />
          <ContactSection navigateToContactSection={navigateToContactSection} />
        </div>
      )}

      {/* Render the ConstructionPage component on specific pages */}
      {(currentPage === "recipe" ||
        currentPage === "categories" ||
        currentPage === "about" ||
        currentPage === "contact") && <ConstructionPage />}

      <Footer />
    </div>
  );
}

export default App;
