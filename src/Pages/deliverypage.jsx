import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './deliverypage.css';

const DeliveryInfoPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [formData, setFormData] = useState({
    name: '',
    alternateNumber: '',
    address: '',
    pincode: '',
    quantity: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  if (!product?._id) {
    alert('Product data is missing.');
    return;
  }

  const orderPayload = {
    ...formData,
    product: {
      _id: product._id,
      name: product.name,
      price: product.price,
    },
    paymentMode: 'COD',
  };

  try {
    const response = await axios.post('https://transportbackend-kappa.vercel.app/api/order', orderPayload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 201) {
      alert('Order placed successfully!');
      navigate('/');
    } else {
      alert('Failed to place order.');
    }
  } catch (error) {
    console.error('❌ Order Error:', error.response?.data || error.message);
    alert('An error occurred while placing the order.');
  }
};


  if (!product) {
    return <p className="no-product-message">No product selected. Go back to the product page.</p>;
  }

  return (
    <div className="delivery-container">
      <h2 className="delivery-title">Delivery Information</h2>
      <div className="delivery-card">
        <div className="product-info">
          <img
            className="product-image"
            src={`http://localhost:5000/uploads/${product.image}`}
            alt={product.name}
          />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">
            <strong>Price:</strong> ₹{product.price}
          </p>
        </div>
        <div className="form-info">
          <form onSubmit={handleSubmit} className="delivery-form">
            <label className="form-label">
              Full Name:
              <input
                className="form-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Alternate Number:
              <input
                className="form-input"
                type="tel"
                name="alternateNumber"
                value={formData.alternateNumber}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Address:
              <textarea
                className="form-input"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Pincode:
              <input
                className="form-input"
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </label>
            <label className="form-label">
              Quantity:
              <input
                className="form-input"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                min="1"
                required
              />
            </label>
            <div className="form-buttons">
              <button type="submit" className="place-order-button">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfoPage;
