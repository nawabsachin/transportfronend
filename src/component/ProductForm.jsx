


// import React, { useState, useEffect } from 'react';
// import { addProduct, updateProduct, deleteProduct } from './productService';
// import { jwtDecode } from 'jwt-decode';
// import './ProductForm.css';
// import DashboardMain from './DarshMain';

// const ProductForm = ({ editProduct, onSave }) => {
//   const [product, setProduct] = useState({ name: '', price: '', description: '' });
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [successPopup, setSuccessPopup] = useState(false);

//   useEffect(() => {
//     if (editProduct) {
//       setProduct({
//         name: editProduct.name || '',
//         price: editProduct.price || '',
//         description: editProduct.description || '',
//       });

//       if (editProduct.image) {
//         setPreview(`http://localhost:5000/uploads/${editProduct.image}`);
//       }
//     }
//   }, [editProduct]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const getToken = () => {
//     const token = localStorage.getItem('admin-auth');
//     if (!token) {
//       console.warn('No token found. Proceeding without token.');
//       return null;
//     }

//     try {
//       const decodedToken = jwtDecode(token);
//       if (decodedToken.exp * 1000 < Date.now()) {
//         alert('Session expired. Please login again.');
//         localStorage.removeItem('admin-auth');
//         return null;
//       }
//       return token;
//     } catch (error) {
//       console.error('Invalid token:', error);
//       localStorage.removeItem('admin-auth');
//       return null;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = getToken(); // Optional: backend should handle auth

//     const formData = new FormData();
//     formData.append('name', product.name);
//     formData.append('price', product.price);
//     formData.append('description', product.description);
//     if (image) formData.append('image', image);

//     try {
//       if (editProduct?._id) {
//         await updateProduct(editProduct._id, formData, token);
//       } else {
//         await addProduct(formData, token);
//       }

//       setSuccessPopup(true);
//       if (onSave) onSave();

//       setProduct({ name: '', price: '', description: '' });
//       setImage(null);
//       setPreview(null);
//     } catch (error) {
//       const status = error.response?.status;
//       if (status === 401 || status === 403) {
//         alert('You are not authorized to perform this action.');
//       } else {
//         alert('Error saving product: ' + (error.response?.data?.message || error.message));
//       }
//       console.error(error);
//     }
//   };

//   const handleDelete = async () => {
//     if (editProduct && window.confirm('Are you sure?')) {
//       const token = getToken(); // Optional
//       try {
//         await deleteProduct(editProduct._id, token);
//         if (onSave) onSave();
//       } catch (error) {
//         const status = error.response?.status;
//         if (status === 401 || status === 403) {
//           alert('You are not authorized to delete this product.');
//         } else {
//           alert('Error deleting product');
//         }
//         console.error(error);
//       }
//     }
//   };

//   return (
//     <div className="dashboard-wrapper">
//       <DashboardMain />
//       <div className="product-form-container">
//         <form className="product-form" onSubmit={handleSubmit}>
//           <h3 className="form-title">{editProduct ? 'Edit' : 'Add'} Product</h3>
//           <input
//             className="form-input"
//             placeholder="Name"
//             value={product.name}
//             onChange={e => setProduct({ ...product, name: e.target.value })}
//             required
//           />
//           <input
//             className="form-input"
//             placeholder="Price"
//             value={product.price}
//             onChange={e => setProduct({ ...product, price: e.target.value })}
//             required
//           />
//           <textarea
//             className="form-textarea"
//             placeholder="Description"
//             value={product.description}
//             onChange={e => setProduct({ ...product, description: e.target.value })}
//             required
//           />
//           <input
//             className="form-file"
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//           />
//           {preview && <img className="image-preview" src={preview} alt="Preview" />}
//           <div className="form-buttons">
//             <button className="btn submit-btn" type="submit">
//               {editProduct ? 'Update' : 'Add'} Product
//             </button>
//             {editProduct && (
//               <button className="btn delete-btn" type="button" onClick={handleDelete}>
//                 Delete
//               </button>
//             )}
//           </div>
//         </form>

//         {successPopup && (
//           <div className="popup-backdrop">
//             <div className="popup-content">
//               <h4>Product successfully {editProduct ? 'updated' : 'added'}!</h4>
//               <button className="btn close-btn" onClick={() => setSuccessPopup(false)}>Close</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductForm;


import React, { useState, useEffect } from 'react';
import { addProduct, updateProduct, deleteProduct } from './productService';
import { jwtDecode } from 'jwt-decode';
import './ProductForm.css';
import DashboardMain from './DarshMain';

const ProductForm = ({ editProduct, onSave }) => {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [successPopup, setSuccessPopup] = useState(false);

  useEffect(() => {
    if (editProduct) {
      setProduct({
        name: editProduct.name || '',
        price: editProduct.price || '',
        description: editProduct.description || '',
      });

      if (editProduct.image) {
        setPreview(`https://transportbackend-kappa.vercel.app/uploads/${editProduct.image}`);
      }
    }
  }, [editProduct]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const getToken = () => {
    const token = localStorage.getItem('admin-auth'); // Adjusted to 'admin-auth' based on your first message.
    
    if (!token) {
      console.warn('No token found. Proceeding without token.');
      return null;
    }

    try {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        alert('Session expired. Please login again.');
        localStorage.removeItem('admin-auth');
        return null;
      }
      return token;
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('admin-auth');
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getToken(); // Optional: backend should handle auth

    const formData = new FormData();
    formData.append('name', product.name);
    formData.append('price', product.price);
    formData.append('description', product.description);
    if (image) formData.append('image', image);

    // Log FormData for debugging
    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      if (editProduct?._id) {
        await updateProduct(editProduct._id, formData, headers);
      } else {
        await addProduct(formData, headers);
      }

      setSuccessPopup(true);
      if (onSave) onSave();

      setProduct({ name: '', price: '', description: '' });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error('Error:', error);

      if (error.response) {
        console.error('Response Status:', error.response.status);
        console.error('Response Data:', error.response.data);
        alert('Error saving product: ' + (error.response.data?.message || error.message));
      } else {
        console.error('Error message:', error.message);
        alert('Unexpected error: ' + error.message);
      }
    }
  };

  const handleDelete = async () => {
    if (editProduct && window.confirm('Are you sure?')) {
      const token = getToken(); // Optional: backend should handle auth
      try {
        await deleteProduct(editProduct._id, token);
        if (onSave) onSave();
      } catch (error) {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          alert('You are not authorized to delete this product.');
        } else {
          alert('Error deleting product');
        }
        console.error(error);
      }
    }
  };

  return (
    <div className="dashboard-wrapper">
      <DashboardMain />
      <div className="product-form-container">
        <form className="product-form" onSubmit={handleSubmit}>
          <h3 className="form-title">{editProduct ? 'Edit' : 'Add'} Product</h3>
          <input
            className="form-input"
            placeholder="Name"
            value={product.name}
            onChange={e => setProduct({ ...product, name: e.target.value })}
            required
          />
          <input
            className="form-input"
            placeholder="Price"
            value={product.price}
            onChange={e => setProduct({ ...product, price: e.target.value })}
            required
          />
          <textarea
            className="form-textarea"
            placeholder="Description"
            value={product.description}
            onChange={e => setProduct({ ...product, description: e.target.value })}
            required
          />
          <input
            className="form-file"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          {preview && <img className="image-preview" src={preview} alt="Preview" />}
          <div className="form-buttons">
            <button className="btn submit-btn" type="submit">
              {editProduct ? 'Update' : 'Add'} Product
            </button>
            {editProduct && (
              <button className="btn delete-btn" type="button" onClick={handleDelete}>
                Delete
              </button>
            )}
          </div>
        </form>

        {successPopup && (
          <div className="popup-backdrop">
            <div className="popup-content">
              <h4>Product successfully {editProduct ? 'updated' : 'added'}!</h4>
              <button className="btn close-btn" onClick={() => setSuccessPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductForm;
