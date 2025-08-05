import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";
import "./footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links-wrapper">
        <div className="column">
          <h3>Useful Links</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
        </div>

        <div className="column">
          <h3>Home</h3>
          <a href="/about-us">About Us</a>
          <a href="/shop">Shop</a>
          <a href="/contact-us">Contact Us</a>
        </div>
      </div>

      <div className="column contact">
        <h3>Contact</h3>
        <p>996/4 Shop No 1, Village & Post Dhanand Teh</p>
        <p>Depalpur Near ICD Container Depot, Airport Road</p>
        <p>District Indore, Pin No 453004, Madhya Pradesh</p>
        <p>📞 <a href="tel:+919752881492">9752881492</a></p>
        <p>✉️ <a href="mailto:infozaeeshcorporation@gmail.com">infozaeeshcorporation@gmail.com</a></p>
      </div>

      <div className="column social-icons">
        <h3 className="connect">Connect</h3>
        <div className="icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pinterest"
          >
            <FaPinterest />
          </a>
        </div>
      </div>

      <div className="copyright">
        &copy; Zaeesh Corporation. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
