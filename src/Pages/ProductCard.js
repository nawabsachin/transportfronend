// ProductCard.js
import React from "react";
import'./ProductPage.css'

function ProductCard({ product, onClick, onEditClick }) {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      {onEditClick && <button onClick={() => onEditClick(product)}>Edit</button>}
    </div>
  );
}

export default ProductCard;
