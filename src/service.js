import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

import './service.css'; // Make sure to include your CSS file for styling

function Services() {
  const [showMore, setShowMore] = useState(false);
  // const handleRedirect = () => {
  //   navigate("/transport11/src/Form.js"); // replace with your target route
  // };

  const services = [
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2023/9/341047905/HD/NF/FC/194131084/international-sea-freight-forwarding-service-provider-in-gurgaon-500x500.jpg",
      title: "Custom Clearance by Air",
      description: "We are engaged in providing reliable air custom clearing services so that our clients receive their goods on time.",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZxymWft5juNlS7dWf0K17vQNqivTXpOz4YfYCpdyekXYwfZ3Y",
      title: "Import Export Consultants",
      description: "To furnish the requirements of clients, we are engaged in offering reliable import export.",
    },
    {
      imgSrc: "https://5.imimg.com/data5/SELLER/Default/2024/2/394542740/ZK/HS/TZ/20286283/import-shipping-services-from-china-to-mundra-500x500.jpg",
      title: "Air Cargo Agents",
      description: "Keeping the diverse requirements of customers in mind, we provide reliable & prompt air cargo services.",
    },
    {
      imgSrc: "https://5.imimg.com/data5/RE/VJ/SP/SELLER-12300828/sea-freight-service.png",
      title: "Customs  Handling",
      description: "The processes involved in ensuring goods are legally allowed to enter or leave a country.",
    },
    {
      imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRzV9XLle1oZWQ3JL2YP3cOoZFcnNe4ZFT7H22tgxxj8s4Hefsd",
      title: "Sea Air Freight",
      description: "Sea freight and air freight are two major methods of shipping goods internationally, each with distinct.",
    },
    {
      imgSrc: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS9acWj6ZMbOpOM7FvdMYq80WYCD_r_JlN2UDnt0JA1oMqkcJTD",
      title: "Imports & Exports",
      description: "Fundamental concepts in international trade, referring to the movement of goods and services across borders.",
    }
  ];

  const visibleServices = showMore ? services : services.slice(0, 3);

  return (
    <div>
      <h1 className='d1'>SERVICES</h1>
      <div className="service-grid">
        {visibleServices.map((service, index) => (
          <div key={index} className="service-item">
            <img
              src={service.imgSrc}
              alt={`Service ${index + 1}`}
              className="service-img"
            />
            <h3 className="service-heading">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {/* <button className="service-btn">Enquiry Now</button> */}
            <Link className='service-btn' to="/transport11/src/contact.js">Enquiry Now</Link>
             {/* <button onClick={handleRedirect}>
      Go to New Page
    </button>  */}
          </div>
        ))}
      </div>
      <button 
        className="view-more-btn" 
        onClick={() => setShowMore(!showMore)}>
        {showMore ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default Services;
