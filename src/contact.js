import React, { useState } from "react";
import axios from "axios";
import "./contact.css"; // Optional: Include CSS styles for the form

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending form data to the backend using Axios or Fetch
    try {
      const res = await axios.post("https://transportbackend-1.onrender.comapi/contact", formData);
      if (res.status === 201) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Wrapper for side-by-side layout */}
      <div className="map-contact-wrapper">
        {/* Map Section */}
        <div className="map-section">
          <iframe
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.7764463761944!2d75.76999111496066!3d22.725129485090934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f83f52c4389f%3A0x8d157a991b6fc037!2sDhanand%2C%20Madhya%20Pradesh%20453004!5e0!3m2!1sen!2sin!4v1716812345678"
  style={{ width: "100%", height: "300px", border: "0" }}
  allowFullScreen=""
  loading="lazy"
/>

        </div>

        {/* Contact Details Section */}
        <div className="contact-details">
          <h2>Our Office Address</h2>
          <p>
            996/4 Shop No 1 Near ICD Container Depo Air Port Road Village & Post Dhanand Teh Depalpur District Indore Pin No 453004 Madhya Pradesh
          </p>
          <br />
          <h2>General Enquiries</h2>
          <p>Email: <a href="mailto:infozaeeshcorporation@gmail.com">infozaeeshcorporation@gmail.com</a></p>
          <br />
          <h2>Call Us</h2>
          <p><a href="tel:+918888888888">+91-9752881492</a></p>
          <br />
          <h2>Our Timing</h2>
          <p>Mon - Sun: 10:00 AM - 07:00 PM</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-left">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-right">
            <textarea
              name="message"
              placeholder="Message"
              rows="8"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="submit-btn-container">
            <button className="btn-sub1" type="submit">Submit</button>
          </div>
        </form>
        {responseMessage && <p className="form-response-message">{responseMessage}</p>}
      </div>
    </div>
  );
};

export default ContactSection;
