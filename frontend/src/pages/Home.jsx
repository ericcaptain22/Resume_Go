import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to Resume Builder & Job Portal</h1>
      <p>Build your professional profile and connect with recruiters.</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        &nbsp;
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
