// AdminPanel.js
import React, { useState } from "react";
import ProductCard from "./ProductCard"; // Import the ProductCard component

function AdminPanel({ products, onProductUpdate }) {
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    id: null,
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setFormData({ ...product });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onProductUpdate(formData);
    setEditingProduct(null); // Close the editing form after update
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={handleEditClick}
            onEditClick={handleEditClick} // Pass edit function as prop
          />
        ))}
      </div>

      {editingProduct && (
        <div className="edit-form">
          <h3>Edit Product</h3>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Price: </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Description: </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Image URL: </label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Save Changes</button>
            <button type="button" onClick={() => setEditingProduct(null)}>
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AdminPanel;
 