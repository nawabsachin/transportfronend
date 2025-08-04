// // api/product.js

// // Function to fetch products from the server
// export const getProducts = async () => {
//   try {
//     const response = await fetch('http://localhost:5000/api/products');
//     if (!response.ok) {
//       throw new Error('Failed to fetch products');
//     }
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.error('Error fetching products:', err);
//     throw new Error('Failed to load products: ' + err.message);
//   }
// };

// // Function to delete a product by its ID
// export const deleteProduct = async (id) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'DELETE',
//     });
//     if (!response.ok) {
//       throw new Error('Failed to delete product');
//     }
//   } catch (err) {
//     console.error('Error deleting product:', err);
//     throw new Error('Failed to delete product');
//   }
// };

// // Function to update an existing product
// export const updateProduct = async (id, productData) => {
//   try {
//     const response = await fetch(`http://localhost:5000/api/products/${id}`, {
//       method: 'PUT',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(productData),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to update product');
//     }
//   } catch (err) {
//     console.error('Error updating product:', err);
//     throw new Error('Failed to update product');
//   }
// };

// // Function to create a new product
// export const createProduct = async (productData) => {
//   try {
//     const response = await fetch('http://localhost:5000/api/products', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(productData),
//     });
//     if (!response.ok) {
//       throw new Error('Failed to create product');
//     }
//     return await response.json();
//   } catch (err) {
//     console.error('Error creating product:', err);
//     throw new Error('Failed to create product');
//   }
// };


const API_BASE = 'https://transportbackend-1.onrender.com/api';
// https://transportbackend-git-main-nawabsachins-projects.vercel.app/




const getToken = () => localStorage.getItem('admin-auth');

// Get all products
export const getProducts = async () => {
  const res = await fetch(`${API_BASE}/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

// Create product
export const createProduct = async (productFormData) => {
  const res = await fetch(`${API_BASE}/products`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: productFormData,
  });

  if (!res.ok) throw new Error('Failed to create product');
  return res.json();
};

// Update product
export const updateProduct = async (id, productFormData) => {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: productFormData,
  });

  if (!res.ok) throw new Error('Failed to update product');
  return res.json();
};

// Delete product
export const deleteProduct = async (id) => {
  const res = await fetch(`${API_BASE}/products/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  if (!res.ok) throw new Error('Failed to delete product');
  return res.json();
};
