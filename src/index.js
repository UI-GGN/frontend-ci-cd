import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "products",
    element: <Products/>
  },
]);

createRoot(document.getElementById("root")).render(
  <div className='App-header'>
    <RouterProvider router={router} />
  </div>
);
