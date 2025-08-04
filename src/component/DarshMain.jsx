import React from "react";
import { Link, useLocation, Route, Routes } from "react-router-dom"; 
import ProductForm from './ProductForm'; // Example of one content component
import ProductList from './ProductList'; // Example of another content component
import './dashmain.css'; // Custom CSS for the layout

export default function DashboardMain() {
  const location = useLocation();

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">AwaInspires</h2>
        <ul className="menu">
          <li className={location.pathname === "/transport11/src/component/ProductForm.jsx" ? "active" : ""}>
            <Link to="/transport11/src/component/ProductForm.jsx">Add Products</Link>
          </li>
          <li className={location.pathname === "/transport11/src/component/ProductList.jsx" ? "active" : ""}>
            <Link to="/transport11/src/component/ProductList.jsx">List Of Products</Link>
          </li>
          <li className={location.pathname === "/order-history" ? "active" : ""}>
            <Link to="/transport11/src/component/OrderTable.jsx">Order History</Link>
          </li>
          <li className={location.pathname === "/transport11/src/component/ContactList.jsx" ? "active" : ""}>
            <Link to="/transport11/src/component/ContactList.jsx">Querys</Link>
          </li>
        </ul>
      </div>

     
    </div>
  );
}
