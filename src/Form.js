


import React, { useState, useEffect } from 'react';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';

const Form = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isLogin
      ? 'http://localhost:5000/api/login'
      : 'http://localhost:5000/api/register';

    const payload = isLogin
      ? { email, password }
      : { name, number, email, location, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert(isLogin ? 'Login successful!' : 'Registered successfully!');
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate('/');
        }
      } else if (res.status === 409 && !isLogin) {
        alert('User already exists. Redirecting to login...');
        setIsLogin(true);
      } else {
        alert(data.message || 'Something went wrong');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input type="text" placeholder="Phone Number" value={number} onChange={(e) => setNumber(e.target.value)} required />
              <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </>
          )}

          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>

          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span onClick={() => setIsLogin(!isLogin)} style={{ color: 'blue', cursor: 'pointer' }}>
              {isLogin ? 'Sign Up' : 'Login'}
            </span>
          </p>
        </form>
        <div>
          <span>
            Login as <Link to="/transport11/src/component/Login.jsx">Admin</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Form;
