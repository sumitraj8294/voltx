import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css";
import logo from "../assets/voltx-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="VoltX Logo" className="logo-img" />
      </div>

      {/* Desktop Menu */}
      <ul className="nav-links desktop-only">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/charge">Charge</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      <div className="nav-buttons desktop-only">
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
                <button onClick={() => { navigate("/dashboard"); setDropdownOpen(false); }}>🏠 Dashboard</button>
                <button onClick={handleLogout}>🚪 Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <NavLink to="/login" className="login">Log in</NavLink>
            <NavLink to="/get-started" className="get-started">Get Started</NavLink>
          </>
        )}
      </div>

      {/* Hamburger Icon */}
      <button className="hamburger" onClick={toggleMenu}>☰</button>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="mobile-backdrop" onClick={closeMenu}></div>
          <div className="mobile-menu">
            <button className="close-btn" onClick={closeMenu}>✕</button>

            <ul className="nav-links">
              <li><NavLink to="/" onClick={closeMenu}>Home</NavLink></li>
              <li><NavLink to="/charge" onClick={closeMenu}>Charge</NavLink></li>
              <li><NavLink to="/about" onClick={closeMenu}>About</NavLink></li>
              <li><NavLink to="/contact" onClick={closeMenu}>Contact</NavLink></li>
            </ul>

            <div className="nav-buttons">
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
                      <button onClick={() => { navigate("/dashboard"); closeMenu(); }}>🏠 Dashboard</button>
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
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
