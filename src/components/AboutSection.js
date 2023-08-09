import React from "react";
import "./About.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      {/* <div className="overlay"> */}
      <div className="about-heading">
        <h2 className="overlay-text">
          About <span>KitchenCrafters</span>
        </h2>
      </div>
      <div className="about-content">
        <p className="about-description">
          Welcome to KitchenCrafters, your ultimate source for delicious
          recipes, cooking tips, and culinary inspiration. Our mission is to
          bring the joy of cooking and sharing meals to every kitchen around the
          world.
        </p>

        <ul className="about-features">
          <li>Explore a diverse collection of recipes</li>
          <li>Learn essential cooking techniques</li>
          <li>Stay updated with the latest food trends</li>
        </ul>
        <div className="about-founder">
          <p>
            KitchenCrafters was founded by Eleanor Bennett, a passionate food
            lover with years of culinary expertise. [Eleanor Bennett] believes
            in the power of cooking to bring people together and create
            unforgettable moments.
          </p>
        </div>
        <div className="abt-founder-container">
          <div className="about-founder-image">
            <img
              src="/images/platting-4282016_1920.jpg"
              alt="[Founder's Name]"
            />
            <p>Eleanor Bennett, [Founder of KitchenCrafters]</p>
          </div>
          <div className="about-kc-info">
            <p>
              At KitchenCrafters, we are dedicated to providing you with a wide
              range of recipes, cooking guides, and food-related content. Our
              goal is to inspire your culinary creativity and help you create
              memorable dining experiences.
            </p>
          </div>
        </div>
        <a href="google.com" className="about-cta">
          Discover Our Recipes
        </a>
      </div>
      {/* </div> */}
    </section>
  );
};

export default AboutSection;
