// BannerWithText.js

import React from 'react';
import '../css/BannerWithText.css';
import logoImage from '../images/PSRS-Story-1024x576.png'; // Adjust the path based on your project structure

const BannerWithText = () => {
  return (
    <div className="banner-with-text">
      <img src={logoImage} alt="Logo" className="logo-image2" />
      <div className="text-block">
        <h1 className='textcolor'>Kwaliteit waar je blij van wordt!</h1>
      </div>
    </div>
  );
};

export default BannerWithText;