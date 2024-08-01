import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'products',
    element: <Products />,
  },
]);

createRoot(document.getElementById('root')).render(
  <div className="container">
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </div>
);
