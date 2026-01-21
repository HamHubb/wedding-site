import React from "react";
// import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ weddingCouple = { partner1: "Emily", partner2: "Hairo" } }) => {
    const [isOpen, setIsOpen] = React.useState(false);   

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navItems = [
      { label: "Home", path: "/"},
      { label: "Our Story", path: "/story" },
      { label: "Gallery", path: "/gallery" },
      { label:"Accommodations", path: "/accommodations"},
      { 
        label: "Registry", 
        path: "https://www.zola.com/wedding/emilyandhairo/registry", 
        external: true 
      },
      { label: "FAQ", path: "/faq"}
    ]



  return (
    <nav className="navbar">
      <div className="navbar-container">
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        {navItems.map((item) => (
          <li key={item.path}>
            <a
              href={item.path}
              className={item.isCta ? "cta-link" : ""}
              onClick={() => {
                if (isOpen) toggleMenu();
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={`navbar-mobile-menu ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {[...Array(5)].map((_, index) => (
            <span key={index} aria-hidden="true"></span>
          ))}
      </button>

      </div>
    </nav>
  );
};

export default Navbar;