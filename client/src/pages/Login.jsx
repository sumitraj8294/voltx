import React, { useState, useContext } from 'react';
import '../styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext'; // ✅ import context

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // ✅ get login from context

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://voltx-ev-charge.onrender.com/api/auth/login', formData);
      
      login(res.data); // ✅ update context state and localStorage here
      alert('Login successful!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Login Error:', err.response?.data?.message || err.message);
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-box">
        <h1>Login to VoltX</h1>
        <p>Welcome back! Please log in to continue.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="switch-auth">
          Not registered? <Link to="/register">Create an account</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
