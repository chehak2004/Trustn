import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import RegisterForm from "../../Components/RegisterForm/RegisterForm";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    if (isOpen || isFormOpen) {
      document.body.classList.add("no-x-overflow");
    } else {
      document.body.classList.remove("no-x-overflow");
    }

    return () => {
      document.body.classList.remove("no-x-overflow");
    };
  }, [isOpen, isFormOpen]);

  // Navigation labels
  const navLabels = {
    "/": "Home",
    "/reviews": "Reviews",
    "/faqs": "FAQs",
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        className="fixed top-4 right-4 text-white text-3xl z-[1000] transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {/* Side Navigation Drawer */}
      <nav
        className={`fixed top-0 right-0 h-full w-[130px] bg-purple-700 text-white z-[999] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Navigation Links */}
        <ul className="mt-16 flex flex-col items-center gap-4 text-sm">
          {Object.entries(navLabels).map(([path, label], index) => (
            <li key={index} className="w-full text-center">
              <Link
                to={path}
                onClick={() => setIsOpen(false)}
                className="block py-2 hover:bg-purple-800 transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}

          {/* Register Button */}
          <li className="w-full text-center mt-4">
            <button
              className="bg-white text-black rounded-full px-4 py-1 text-xs hover:bg-gray-100 transition-transform hover:scale-105"
              onClick={() => {
                setIsFormOpen(true);
                setIsOpen(false);
              }}
            >
              Register
            </button>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col gap-3 text-lg">
          <a href="https://wa.link/6dd5r8" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/profile.php?id=61575257647867" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/__trustn/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="tel:+919560484444"><FaPhoneAlt /></a>
        </div>
      </nav>

      {/* Register Form Modal */}
      <RegisterForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Navbar;
