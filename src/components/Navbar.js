import React from "react";
import "./Navbar.css"; // We'll style this next

const Navbar = ({ weddingCouple = { partner1: "Emily", partner2: "Hairo" } }) => {
    const [isOpen, setIsOpen] = React.useState(false);   

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const navItems = [
      { label: "Home", path: "/"},
      // { label: "Our Story", path: "/story" },
      { label: "Gallery", path: "/gallery" },
      // { label: "RSVP", path: "/rsvp", isCta: true },
      {label: "FAQ", path: "/faq"}
      /* <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/history">History</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/rsvp" className="cta-link">RSVP</a></li>
        </ul> */
    ]



  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Wedding Logo/Brand */}
        {/* <div className="navbar-logo">
            <span className="script-font">{weddingCouple.partner1}</span> 
            <span className="ampersand">&</span>
            <span className="script-font">{weddingCouple.partner2}</span>
        </div> */}

        {/* Navigation Links */}
        

        {/* Mobile Hamburger Menu (Optional) */}
        {/* <div className="navbar-mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div> */}
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
        {[...Array(3)].map((_, index) => (
            <span key={index} aria-hidden="true"></span>
          ))}
      </button>

      </div>
    </nav>
  );
};

export default Navbar;