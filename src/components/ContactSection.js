import React, { useState } from "react";
import "./Contactsection.css";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted with the following data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    setName("");
    setEmail("");
    setMessage("");

    //show alert
    setShowAlert(true);

    //hide the alert after 3secs
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };
  return (
    <div className="contact-section">
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <button type="submit">Submit</button>
        </form>
        {showAlert && (
          <div className="alert">
            Form submitted! Thank you for your Message
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
