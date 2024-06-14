import React, { useState } from 'react';
const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
};
const ProductsList = ({ products }) => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
const Products = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 29.99 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 49.99 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: 9.99 },
  ]);

  return (
    <div className="products-page">
      <h1>Products</h1>
      <ProductsList products={products} />
    </div>
  );
};

export default Products;
