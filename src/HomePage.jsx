import React from 'react';
import './HomePage.css';
import homeImage from './image/home.png'; // adjust path as needed

const HomePage = () => {
  return (
    <div className="image-wrapper">
      <img src={homeImage} alt="Background" className="responsive-image" />
    </div>
  );
};

export default HomePage;
