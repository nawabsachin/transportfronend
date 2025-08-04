import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa"; 
import "./footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Useful Links</h3>
        <a href="#">Privacy Policy</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
      </div>

      <div className="column">
        <h3>Home</h3>
        <a href="#">About Us</a>
        <a href="#">Shop</a>
        <a href="#">Contact Us</a>
      </div>

      <div className="column contact">
        <h3>Contact</h3>
        <p>996/4 Shop No 1  Village & Post Dhanand Teh</p>
        <p>Depalpur Near ICD Container Depo Air Port Road</p>
        <p>District Indore Pin No 453004 Madhya Pradesh</p>
        <p>📞 9752881492</p>
        <p>✉️ infozaeeshcorporation@gmail.com</p>
      </div>

      <div className="column social-icons">
        <h3 className="connect">Connect</h3>
        <div className="icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaPinterest /></a>
        </div>
      </div>
     
      <div className="copyright">
        &copy; Zaeesh Corporation All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
