


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getProducts } from '../api/proudct';
// import './ProductPage1.css';

// const ProductPage1 = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (err) {
//       console.error(err);
//       setError('Failed to load products.');
//     }
//   };

//   const handleBuyNow = (product) => {
//     navigate('/transport11/src/Pages/deliverypage.jsx', { state: { product } });
//   };

//   return (
//     <div className="product-main">
//       <h2 className="product-p">Our Wide Range of Products</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div className="product-grid">
//         {products.map((product) => (
//           <div key={product._id} className="product-card">
//             {product.image ? (
//               <img
//                 src={`http://localhost:5000/uploads/${product.image}`}
//                 alt={product.name}
//                 width="100"
//               />
//             ) : (
//               <p>No image</p>
//             )}
//             <h3>{product.name}</h3>
//             <p><strong>Price:</strong> ${product.price}</p>
//             <p>{product.description}</p>
//             <button className="buy-button" onClick={() => handleBuyNow(product)}>
//               Buy Now
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage1;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../api/proudct';
import './ProductPage1.css';

const ProductPage1 = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError('Failed to load products.');
    }
  };

  const handleBuyNow = (product) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please log in to buy a product.');
      navigate('/transport11/src/Form.js'); // Adjust route as per your setup
    } else {
      navigate('/transport11/src/Pages/deliverypage.jsx', { state: { product } });
    }
  };

  return (
    <div className="product-main">
      <h2 className="product-p">Our Wide Range of Products</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            {product.image ? (
              <img
                src={`https://transportbackend-1.onrender.com/uploads/${product.image}`}
                alt={product.name}
                width="100"
              />
            ) : (
              <p>No image</p>
            )}
            <h3>{product.name}</h3>
            <p><strong>Price:</strong> {product.price}</p>
            <p>{product.description}</p>
            <button className="buy-button" onClick={() => handleBuyNow(product)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage1;
