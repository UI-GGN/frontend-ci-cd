import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <h1>Welcome to Our Frontend Store</h1>
        <p>Browse our collection of amazing products!</p>
        <Link to="/products">Take me to Products page!</Link>
      </div>
    </>
  );
};

export default HomePage;
