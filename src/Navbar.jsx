// import './App.css';
// import Services from './service';
// import AboutUs from './about';
// import Gallery from './gellary';
// import Contact from './contact';
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link,} from "react-router-dom";
// import './navbar.css';
// import myimage from './image/logo1.png';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import Form from './Form';  // Import Form.js
// import AboutPage from './AboutPage';


// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="hero-section">
//       {/* Top Bar */}
//       <header className="header">
//         <div className="top-bar">
//           <div className="social-icons">
//             <i className="fab fa-facebook"></i>
//             <i className="fab fa-linkedin"></i>
//             <i className="fab fa-instagram"></i>
//           </div>
//           <div className="contact">
//             <span>&nbsp;&nbsp;&nbsp;&nbsp;9752881492</span>
//             <span>&nbsp;&nbsp;infozaeeshcorporation@gmail.com</span>
//           </div>
//           <div className="contact-1">
//             <span><Link to="/form/login">Login</Link> &nbsp;&nbsp;|</span>
//             <span>&nbsp;&nbsp;<Link to="/form/signup">Sign-Up</Link></span>
//           </div>
//         </div>

//         {/* Navbar */}
//         <nav className="navbar">
//           <div className="logo">
//             <img className='logo-1' src={myimage} alt="Logo" />
//           </div>

//           <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//             ☰
//           </div>
//           <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
//             <li><Link to="/">HOME</Link></li>
//             <li><Link to="/services">SERVICES</Link></li>
//             <li><Link to="/src/AboutPage.js">ABOUT US</Link></li>
//             <li><Link to="/gallery">GALLERY</Link></li>
//             <li><Link to="/privacy">PRIVACY & POLICY</Link></li>
//             <li><Link to="/contact">CONTACT US</Link></li>
//           </ul>
//         </nav>
//       </header>

//       {/* Main Content */}
      

//       {/* Footer */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router> {/* Ensure that the whole app is wrapped in a Router */}
//       <Navbar />
//     </Router>
//   );
// }

// export default App;
// import { useState } from 'react'
// import { Link } from 'react-router-dom'
// import myimage from './image/home.png';
// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div>
//         <div className="hero-section">
//        {/* Top Bar */}
//        <header className="header">
//          <div className="top-bar">
//            <div className="social-icons">
//              <i className="fab fa-facebook"></i>           <i className="fab fa-linkedin"></i>
//              <i className="fab fa-instagram"></i>
//            </div>
//            <div className="contact">
//              <span>&nbsp;&nbsp;&nbsp;&nbsp;9752881492</span>
//              <span>&nbsp;&nbsp;infozaeeshcorporation@gmail.com</span>
//            </div>
//            <div className="contact-1">
//              <span><Link to="/form/login">Login</Link> &nbsp;&nbsp;|</span>
//              <span>&nbsp;&nbsp;<Link to="/form/signup">Sign-Up</Link></span>
//            </div>
//          </div>

//          {/* Navbar */}
//          <nav className="navbar">
//            <div className="logo">
//              <img className='logo-1' src={myimage} alt="Logo" />
//            </div>
//            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//              ☰
//            </div>
//            <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
//              <li><Link to="/">HOME</Link></li>
//              <li><Link to="/services">SERVICES</Link></li>
//              <li><Link to="/src/AboutPage.js">ABOUT US</Link></li>
//              <li><Link to="/gallery">GALLERY</Link></li>
//              <li><Link to="/privacy">PRIVACY & POLICY</Link></li>
//              <li><Link to="/contact">CONTACT US</Link></li>
//            </ul>
//          </nav>
//        </header>

//        {/* Main Content */}
      

//        {/* Footer */}
//        {/* <Footer /> */}
//      </div>
//     </div>
//   )
// }

// export default Navbar


// src/components/NavBar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';
import MyImage from './image/logo1.png'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
      <img className='logo-img' src={MyImage} alt="Description of image" />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/src/Pages/ServicePage.js">SERVICES</Link></li>
        <li><Link to="/src/AboutPage.js">ABOUT US</Link></li>
        <li><Link to="/src/Pages/ProductPage.js">PRODUCT</Link></li>
        <li><Link to="/src/Pages/PrivacyPolicy.jsx">PRIVACY & POLICY</Link></li>
        <li><Link to="/src/Pages/ContactPage.js">CONTACT US</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
