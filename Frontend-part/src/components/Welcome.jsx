import React from 'react';
import { Link } from 'react-router-dom';
import "./Styles.css";

const Welcome = () => {
  return (
    <div   style={{ textAlign: 'center', marginTop: '50px' }}>
      <div className="front "  style={{ fontSize: '18px', marginBottom: '20px' }}>
        <Link to="/register" style={{ margin: '0 15px' }}>Register</Link>
        <Link to="/login" style={{ margin: '0 15px' }}>Login</Link>
        <Link to="/name" style={{ margin: '0 15px' }}>Submit Name</Link>
        <Link to="/edit-profile" style={{ margin: '0 15px' }}>Edit Profile</Link> 
      </div>
      <h1 >Welcome !</h1>
    </div>
  );
};

export default Welcome;
