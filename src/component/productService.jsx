
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api/products';

// export const addProduct = async (formData, token) => {
//   return await axios.post(API_URL, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`, // ✅ Include token
//     },
//   });
// };

// export const updateProduct = async (id, formData, token) => {
//   return await axios.put(`${API_URL}/${id}`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const deleteProduct = async (id) => {
//   const token = localStorage.getItem('token');
//   return await axios.delete(`${API_URL}/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };
import axios from 'axios';

const apiUrl = 'https://transportbackend-1.onrender.com/api/products'; // Adjust to your backend API

export const addProduct = async (formData, headers) => {
  try {
    const response = await axios.post(apiUrl, formData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const updateProduct = async (id, formData, headers) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, formData, { headers });
    return response.data;
  } catch (error) {
    console.error('Error updating product:', error);
    throw error;
  }
};

export const deleteProduct = async (id, headers) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`, { headers });
    return response.data;
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
