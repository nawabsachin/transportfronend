import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MyImage from './image/logo1.png';
import './Nnavbar.css';

const NavBarHarsh = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <div className="hero-section">
        <header className="header">
          

          <nav className="navbar">
            <div className="logo--1">
              <img className='logo-img' src={MyImage} alt="Company Logo" />
            </div>

            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            <div className='navmain--1'>
              <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                <li className="nav-item"><Link to="/">HOME</Link></li>
                <li className="nav-item"><Link to="/src/Pages/ServicePage.js">SERVICES</Link></li>
                <li className="nav-item"><Link to="/src/Pages/AboutPage.js">ABOUT US</Link></li>
                <li className="nav-item"><Link to="/src/Pages/ProductPage.js">PRODUCT</Link></li>
                <li className="nav-item"><Link to="/src/Pages/PrivacyPolicy.jsx">PRIVACY & POLICY</Link></li>
                <li className="nav-item"><Link to="/src/Pages/ContactPage.js">CONTACT US</Link></li>
                <li className="nav-item nav-item-login">
                  {localStorage.getItem('token') ? (
                    <button onClick={() => {
                      localStorage.removeItem('token');
                      window.location.reload();
                    }} className="logout-btn">
                      Logout
                    </button>
                  ) : (
                    <Link to="/transport11/src/Form.js" className="login-link">Login</Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBarHarsh;
