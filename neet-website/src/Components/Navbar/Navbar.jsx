import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Menu button with fade-out effect */}
      <button className={`menu-btn ${isOpen ? "hidden" : ""}`} onClick={toggleMenu}>☰</button>

      {/* Overlay to close the menu when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Pop-up Navbar */}
      <div className={`nav ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>✖</button>
        <ul className="nav-menu">
          <li>Home</li>
          <li>Reviews</li>
          <li>About</li>
          <li className="nav-contact">Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
