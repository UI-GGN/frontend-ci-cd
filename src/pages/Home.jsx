import React from 'react';
import "./../App.css";
import {
  Link,
} from "react-router-dom";


const Home = () => {
  return (
      <div className='container'>
        <h1>Home Page for ci-cd</h1>
        <Link to='products'>Products</Link>
      </div>
  );
};

export default Home;
