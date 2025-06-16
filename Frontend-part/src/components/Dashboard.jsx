import React from 'react';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) return <p>Loading user data...</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h2>😊 Welcome, {user.username ? user.username : 'User'}!</h2>

        <p><strong>Email:</strong> {user.email}</p>

        <div className="dashboard-actions">
          <Link to="/edit-profile" className="dashboard-button">
             Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
