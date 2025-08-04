// src/components/LoginForm.js
import React, { useState } from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Implement logic to verify user's credentials
    alert(`Logged in with ${name}`);
  };

  return (
    <div className="form-container">
      <h2>Login Form</h2>
      <form onSubmit={handleLoginSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
        <small>
              Don't have an account?{' '}
              <Link to="/src/Form.js">Register here</Link> {/* Use Link component */}
            </small>
    </div>
  );
};

export default LoginForm;
