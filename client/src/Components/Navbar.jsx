import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo from "../assets/voltx-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // for profile dropdown
  
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
      {user ? (
  <div className="user-info" onClick={toggleDropdown}>
    <img
      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
      alt="Profile"
      className="profile-icon"
    />
    <span className="user-name">
      {user.name}
      <span className="dropdown-arrow">▼</span>
    </span>

    {dropdownOpen && (
      <div className="dropdown-menu">
        <button onClick={() => { navigate("/dashboard"); setDropdownOpen(false); }}>
          🏠 Dashboard
        </button>
        <button onClick={handleLogout}>🚪 Logout</button>
      </div>
    )}
  </div>
) : (
  <>
    <NavLink to="/login" className="login" onClick={closeMenu}>Log in</NavLink>
    <NavLink to="/get-started" className="get-started" onClick={closeMenu}>Get Started</NavLink>
  </>
)}
      </div>

      <button className="hamburger" onClick={toggleMenu}>☰</button>
    </nav>
  );
};

export default Navbar;
