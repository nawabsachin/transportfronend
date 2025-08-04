// // ProductPage.js
// import React, { useState } from "react";
// import ProductCard from "./ProductCard";
// import './ProductPage.css';

// function ProductInfo({ products }) {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showPaymentOptions, setShowPaymentOptions] = useState(false);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//     setShowPaymentOptions(false);
//   };

//   const handleBuyNow = () => {
//     setShowPaymentOptions(true);
//   };

//   const handlePayment = (method) => {
//     if (method === "Cash on Delivery") {
//       alert(`Order placed for ${selectedProduct.name} with Cash on Delivery.`);
//     } else if (method === "Online Payment") {
//       loadRazorpay();
//     } else if (method === "UPI Direct") {
//       handleUPIPayment();
//     }
//     setShowPaymentOptions(false);
//   };

//   const loadRazorpay = () => {
//     const options = {
//       key: "rzp_test_YourTestKeyHere", // Replace with your actual Razorpay test key
//       amount: selectedProduct.price * 100, // Amount in paise
//       currency: "INR",
//       name: "My Store",
//       description: `Payment for ${selectedProduct.name}`,
//       image: "https://yourdomain.com/logo.png",
//       handler: function (response) {
//         alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: "John Doe",
//         email: "john@example.com",
//         contact: "9999999999"
//       },
//       notes: {
//         product_id: selectedProduct.id,
//         upi_id: "930221321@axl"
//       },
//       theme: {
//         color: "#3399cc"
//       },
//       method: {
//         upi: true
//       },
//       upi: {
//         flow: "collect"
//       }
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   const handleUPIPayment = () => {
//     const upiId = "930221321@axl";
//     const name = encodeURIComponent("My Store");
//     const amount = selectedProduct.price;
//     const url = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

//     window.location.href = url;
//   };

//   return (
//     <div className="product-page">
//       <div className="product-list">
//         {products.map((product) => (
//           <ProductCard
//             key={product.id}
//             product={product}
//             onClick={handleProductClick}
//           />
//         ))}
//       </div>

//       {selectedProduct && (
//         <div className="product-details">
//           <img src={selectedProduct.image} alt={selectedProduct.name} />
//           <h3>{selectedProduct.name}</h3>
//           <p><strong>Price:</strong> ₹{selectedProduct.price}</p>
//           <p><strong>Description:</strong> {selectedProduct.description}</p>
//           <button className="buy-now-btn" onClick={handleBuyNow}>Buy Now</button>

//           {showPaymentOptions && (
//             <div className="payment-options">
//               <p>Select Payment Method:</p>
//               <button onClick={() => handlePayment("Cash on Delivery")}>
//                 Cash on Delivery
//               </button>
//               <button onClick={() => handlePayment("Online Payment")}>
//                 Online Payment (Razorpay)
//               </button>
//               <button onClick={() => handlePayment("UPI Direct")}>
//                 Pay via UPI (930221321@axl)
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductInfo;


import React from "react";
import "./Product.css";

function ProductInfo({ products }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <h3>{product.name}</h3>
          <p className="price">{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductInfo;
