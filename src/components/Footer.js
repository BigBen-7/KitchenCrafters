import React from "react";
import "./Footer.css"; // Import your custom footer CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>KitchenCrafters</h2>
          <p>Your Culinary Journey Starts Here</p>
        </div>
        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/categories">Categories</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://pinterest.com">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 KitchenCrafters. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
