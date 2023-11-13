// Banner.js

import React from 'react';
import '../css/Banner.css';
import bannerImage from '../images/banner.jpg'; // Adjust the path based on your project structure

const Banner = () => {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <button className="shop-now-button">Shop Now</button>
    </div>
  );
};

export default Banner;
