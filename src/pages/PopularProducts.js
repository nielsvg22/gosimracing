// PopularProducts.js

import React from 'react';
import '../css/PopularProducts.css';
import placeholderImage from '../images/banner.jpg';
import placeholderImage2 from '../images/maxresdefault (2).jpg';
import placeholderImage3 from '../images/RENDER01.jpg';

const PopularProducts = () => {
  // Dummy data for product placeholders
  const products = [
    { id: 1, image: placeholderImage, name: 'Product 1' },
    { id: 2, image: placeholderImage2, name: 'Product 2' },
    { id: 3, image: placeholderImage3, name: 'Product 3' },
    { id: 4, image: placeholderImage, name: 'Product 4' },
  ];

  return (
    <div className="popular-products">
      <div className="populaire-text">Populaire Product</div>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-block">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
