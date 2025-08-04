import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ordertable.css'; // Optional: for styling
import DashboardMain from './DarshMain';


const OrderTable = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://transportbackend-kappa.vercel.app/api/orders');
        setOrders(response.data);
      } catch (error) {
        console.error('❌ Failed to fetch orders:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) return <p>Loading orders...</p>;

  if (orders.length === 0) return <p>No orders found.</p>;

  return (
    <>
    <div className='order-flex'> 
        <div className="dashboard-sidebar">
                <DashboardMain />
              </div>
    <div className="order-table-container">
      <h2>Orders</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Quantity</th>
            <th>Product Name</th>
            <th>Price (₹)</th>
            <th>Total (₹)</th>
            <th>Status</th>
            <th>Ordered On</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order.name}</td>
              <td>{order.alternateNumber}</td>
              <td>{order.address}</td>
              <td>{order.pincode}</td>
              <td>{order.quantity}</td>
              <td>{order.product?.name || 'N/A'}</td>
              <td>{order.product?.price || 0}</td>
              <td>{(order.quantity * order.product?.price).toFixed(2)}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
};

export default OrderTable;
