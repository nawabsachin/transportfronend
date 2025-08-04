import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const Dashboard = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default Dashboard;
