import React, { useState } from 'react';
import '../styles/Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name,
        email,
        password,
        confirmPassword
      });
      console.log('Registration Success:', res.data);
      setShowSuccess(true);
    } catch (err) {
      console.error('Registration Error:', err.response?.data?.message || err.message);
      alert(err.response?.data?.message || 'Something went wrong');
    }
  };

  const handleLoginRedirect = () => {
    setShowSuccess(false);
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Create Account</h1>
        <p>Sign up to access VoltX</p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </label>

          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

          <button className="auth-btn" type="submit">
            Register
          </button>
        </form>

        <div className="switch-auth">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </div>

      {/* ✅ Modal Popup */}
      {showSuccess && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>🎉 Registration Successful!</h2>
            <p>Your account has been created successfully.</p>
            <button className="auth-btn" onClick={handleLoginRedirect}>
              Go to Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
