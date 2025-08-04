


import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import MyImage from './image/logo1.png';
import './Nnavbar.css';

const NavBarHarsh = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleRedirect = () => {
  //   navigate("/transport11/src/Form.js"); // Update if needed
  // };

  return (
    <div>
      <div className="hero-section">
        <header className="header">
          <div className="top-bar">
            <div className="social-icons">
              <div className="social-media-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={30} />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={30} />
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
            <div className="contact">
              <span>&nbsp;&nbsp;&nbsp;&nbsp;9752881492</span>
              <span>&nbsp;&nbsp;infozaeeshcorporation@gmail.com</span>
            </div>
            {/* <div className="contact-1">
              <div> &nbsp;&nbsp;<Link to="/transport11/src/Form.js">Login</Link></div>
            </div> */}
<div className="contact-1">
  {localStorage.getItem('token') ? (
    <button onClick={() => {
      localStorage.removeItem('token');
      window.location.reload(); 
    }} className="logout-btn">
      Logout
    </button>
  ) : (
  <button>  <Link to="/transport11/src/Form.js" className="login-link">Login</Link></button>
  )}
</div>


          </div>

          <nav className="navbar">
            <div className="logo--1">
              <img className='logo-img' src={MyImage} alt="Company Logo" />
            </div>
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>
            <div className='navmain--1'>
              <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
                <li className="nav-item-home"><Link to="/">HOME</Link></li>
                <li className="nav-item-services"><Link to="/src/Pages/ServicePage.js">SERVICES</Link></li>
                <li className="nav-item-about"><Link to="/src/Pages/AboutPage.js">ABOUT US</Link></li>
                <li className="nav-item-product"><Link to="/src/Pages/ProductPage.js">PRODUCT</Link></li>
                <li className="nav-item-privacy"><Link to="/src/Pages/PrivacyPolicy.jsx">PRIVACY & POLICY</Link></li>
                <li className="nav-item-contact"><Link to="/src/Pages/ContactPage.js">CONTACT US</Link></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default NavBarHarsh;
