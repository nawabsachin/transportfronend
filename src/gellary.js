import React from 'react';
import './gellary.css';

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">GALLERY</h2>
      <div className="gallery-images">
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2024/8/440433936/QR/AI/OK/218332440/courier-service-500x500.jpg"
          alt="Courier service delivery van"
          className="gallery-image"
        />
        <img
          src="https://www.freightgetter.com/img/teca071bdb469e9364a14a80ad544792d.jpg?06"
          alt="Freight containers at shipping yard"
          className="gallery-image"
        />
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2022/10/TC/AH/OR/5461710/international-sea-service-500x500.png"
          alt="International sea cargo service"
          className="gallery-image"
        />
      </div>
    </div>
  );
};

export default Gallery;
