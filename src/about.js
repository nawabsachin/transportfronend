import React from 'react';
import './about.css'; // Import the CSS file for styles
import MyImage from './image/ship.jpg';

const AboutUs = () => {
    return (
        <div className="about-container">
            <div className="about-text">
                <h1>ABOUT US</h1>
                <p>
                    Zaeesh Corporation is a multifaceted company engaged in various sectors, including shipping, logistics, energy, and digital services. While specific details about their import and export operations are limited, the company has established a presence in several key areas:

                    Zaeesh  Shipping & Logistics offers freight transportation arrangements and customs clearance services. We have infrastructure to provide total logistics support, including separate warehousing for each client as per their requirements. We process orders from our clients and ship them to their channel partners and end customers. Our company started with a vision to offer complete logistic services to corporate and many other business establishments in various fields and all types of segments. We are engaged in providing domestic as well as international cargo services by various modes like air, railway, sea, and road.
                </p>
            </div>
            <div className="about-image">
                 <img className='logo-img' src={MyImage} alt="Company Logo" />
            </div>
        </div>
    );
};

export default AboutUs;
