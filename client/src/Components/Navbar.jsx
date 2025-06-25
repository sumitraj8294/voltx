import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/voltx-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="VoltX Logo" className="logo-img" />
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/charge" onClick={closeMenu}>Charge</NavLink></li>
        <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
      </ul>

      <div className={`nav-buttons ${menuOpen ? "open" : ""}`}>
        <NavLink to="/login" className="login" onClick={closeMenu}>Log in</NavLink>
        <NavLink to="/get-started" className="get-started" onClick={closeMenu}>Get Started</NavLink>
      </div>

      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
