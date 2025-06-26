import React from 'react';
import '../styles/UserDashboard.css';
import carImg from '../assets/ev-car.png'; // Make sure this image exists

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <button>Dashboard</button>
          <button>Bookings</button>
          <button>Settings</button>
          <button>Logout</button>
        </nav>
      </aside>

      <main className="main-content">
        <div className="grid">
          {/* Existing Cards */}
          <div className="card battery">
            <h3>Battery</h3>
            <div className="value">86%</div>
          </div>

          <div className="card range">
            <h3>Range</h3>
            <div className="value">284.2 km</div>
          </div>

          <div className="card ev-info">
            <h3>EV Info</h3>
            <p><strong>Plug Status:</strong> Plugged In</p>
            <p><strong>Odometer:</strong> 1398 km</p>
            <p><strong>Sentry Mode:</strong> Off</p>
          </div>

          <div className="card current-booking">
            <h3>Current Booking</h3>
            <p>📍 Tata EV Station, Delhi</p>
            <p>⏰ 3:00 PM - 4:00 PM</p>
            <p>🔌 Slot: C2</p>
          </div>

          <div className="card recent-bookings">
            <h3>Recent Bookings</h3>
            <ul>
              <li>Delhi EV Hub - 20 June</li>
              <li>Green Station - 18 June</li>
              <li>Charge Point - 15 June</li>
            </ul>
          </div>

          <div className="card quick-actions">
            <h3>Quick Actions</h3>
            <div className="actions">
              <button>🔓 Unlock</button>
              <button>🔌 Open Port</button>
              <button>🚗 Start Car</button>
            </div>
          </div>

          {/* New Content Cards */}
          <div className="card chart">
            <h3>Charging Stats</h3>
            <img src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri'],datasets:[{label:'kWh Used',data:[4,5,6,3,7]}]}}" alt="Chart" style={{ width: '100%' }} />
          </div>

          <div className="card car-overview">
            <h3>My EV</h3>
            <img src={carImg} alt="Electric Car" style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ marginTop: '10px' }}>Tesla Model 3 | Dual Motor AWD</p>
          </div>

          <div className="card notifications">
            <h3>Notifications</h3>
            <ul>
              <li>🔋 Battery fully charged.</li>
              <li>📅 Upcoming booking tomorrow at 11:00 AM.</li>
              <li>🛠️ Software update available.</li>
            </ul>
          </div>

          <div className="card tips">
            <h3>EV Tips</h3>
            <ul>
              <li>🌡️ Precondition your car while charging to save battery.</li>
              <li>⚡ Keep battery between 20-80% for long-term health.</li>
              <li>🛣️ Use regenerative braking in traffic zones.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
