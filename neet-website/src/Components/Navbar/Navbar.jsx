import React, { useState } from "react";
import "./Navbar.css";
import { MenuRounded, CloseRounded } from "@mui/icons-material";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open menu */}
      <button className="menu-btn" onClick={() => setIsOpen(true)}>
        <MenuRounded />
      </button>

      {/* Pop-up Navbar */}
      <div className={`nav ${isOpen ? "show" : ""}`}>
        {/* Close button */}
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <CloseRounded />
        </button>

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
