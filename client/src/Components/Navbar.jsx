import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">⚡ VoltX</div>

      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/charge">Charge</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="nav-buttons">
        <NavLink to="/login" className="login">Log in</NavLink>
        <NavLink to="/get-started" className="get-started">Get Started</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
