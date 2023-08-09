// import React, { useState } from "react";
import "./Home.css";
// import LatestBlogPosts from "./LatestBlogPosts";

const Home = ({ navigateToRecipe }) => {
  return (
    <div className="hero-section fade-in">
      <div
        className="hero-background"
        style={{
          backgroundImage: "url('/images/noodles-with-shrimps.jpg')",
        }}
      >
        <div className="overlay">
          <h1>
            Welcome to <span>KitchenCrafters</span>
          </h1>
          <p>Explore a variety of mouth-watering recipes.</p>
          <button className="cta-button" onClick={() => navigateToRecipe()}>
            Get Started
          </button>
        </div>
      </div>
      {/* <div className="latest-blog-posts-section">
        <LatestBlogPosts />
      </div> */}
    </div>
  );
};

export default Home;
