


import React, { useEffect, useState } from 'react';
import {
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from '../api/proudct'; // Make sure your API handles FormData
import DashboardMain from './DarshMain';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    imageFile: null,
  });
  const [error, setError] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const token = localStorage.getItem('admin-auth');
  const isAdmin = token && JSON.parse(atob(token.split('.')[1]))?.role === 'admin';

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products: ' + err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return;

    try {
      await deleteProduct(id);
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      console.error('Error deleting product:', err);
      setError('Failed to delete product.');
    }
  };

  const startEditing = (product) => {
    setEditingProduct(product._id);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description || '',
      imageFile: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, imageFile: e.target.files[0] }));
  };

  const handleUpdate = async (id) => {
    try {
      const updatedData = new FormData();
      updatedData.append('name', formData.name);
      updatedData.append('price', formData.price);
      updatedData.append('description', formData.description);
      if (formData.imageFile) {
        updatedData.append('image', formData.imageFile);
      }

      await updateProduct(id, updatedData);
      setEditingProduct(null);
      fetchProducts();
    } catch (err) {
      console.error('Full update error:', err.response?.data || err.message);
      setError('Failed to update product: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleAddProduct = async () => {
    try {
      const productData = new FormData();
      productData.append('name', formData.name);
      productData.append('price', formData.price);
      productData.append('description', formData.description);
      if (formData.imageFile) {
        productData.append('image', formData.imageFile);
      }

      await createProduct(productData);

      setIsAdding(false);
      setFormData({ name: '', price: '', description: '', imageFile: null });
      fetchProducts();
    } catch (err) {
      console.error('Error adding product:', err);
      setError('Failed to add product.');
    }
  };

  return (
    <div className="dashboard-layout">
      <div className="dashboard-sidebar">
        <DashboardMain />
      </div>

      <div className="dashboard-content">
        <h2 className="product-list-header">Product List</h2>
        {error && <p className="error-message">{error}</p>}

        {isAdmin ? (
          <>
            <button onClick={() => setIsAdding(true)}>Add Product</button>
            {isAdding && (
              <div className="add-product-form">
                <h3>Add New Product</h3>
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <input
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleInputChange}
                />
                <input
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <button onClick={handleAddProduct}>Submit</button>
                <button onClick={() => setIsAdding(false)}>Cancel</button>
              </div>
            )}
          </>
        ) : (
          <p className="info-message">You must be an admin to manage products.</p>
        )}

        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Description</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              editingProduct === product._id ? (
                <tr key={product._id}>
                  <td>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td>
                    <input type="file" accept="image/*" onChange={handleFileChange} />
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(product._id)}>Save</button>
                    <button onClick={() => setEditingProduct(null)}>Cancel</button>
                  </td>
                </tr>
              ) : (
                <tr key={product._id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.description}</td>
                  <td>
                    {product.image ? (
                      <img
                        src={`https://transportbackend-kappa.vercel.app/uploads/${product.image}`}
                        alt={product.name}
                        width="50"
                      />
                    ) : (
                      'No image'
                    )}
                  </td>
                  <td>
                    {isAdmin && (
                      <>
                        <button onClick={() => startEditing(product)}>Edit</button>
                        <button onClick={() => handleDelete(product._id)}>Delete</button>
                      </>
                    )}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
