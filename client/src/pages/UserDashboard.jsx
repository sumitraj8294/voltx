import React from 'react';
import '../styles/UserDashboard.css';

const UserDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')); // assuming token/info stored here

  return (
    <div className="dashboard-page">
      <div className="dashboard-box">
        <h1>Welcome, {user?.name || 'User'} 🚗</h1>
        <p>You're now logged into your VoltX dashboard.</p>

        <div className="dashboard-actions">
          <button onClick={() => window.location.href = '/charge'}>
            🔍 Find Charging Station
          </button>
          <button onClick={() => window.location.href = '/'}>
            🏠 Back to Home
          </button>
          <button onClick={() => {
            localStorage.removeItem('user');
            window.location.href = '/login';
          }}>
            🔓 Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
