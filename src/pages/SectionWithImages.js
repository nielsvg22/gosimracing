// SectionWithImages.js

import React from 'react';
import '../css/SectionWithImages.css';
import placeholderImage from '../images/logo.png'; // Adjust the path based on your project structure

const SectionWithImages = () => {
  return (
    <div className="section-with-images">
      <div className="image-block">
        <img src={placeholderImage} alt="Placeholder" className="section-image" />
        <div className="text-block">
          <h2>Onze Kwaliteiten</h2>
        </div>
      </div>

      <div className="image-block">
        <img src={placeholderImage} alt="Placeholder" className="section-image" />
        <div className="text-block">
          <h2>Over ons</h2>
        </div>
      </div>

      <div className="image-block">
        <img src={placeholderImage} alt="Placeholder" className="section-image" />
        <div className="text-block">
          <h2>Populaire Producten</h2>
        </div>
      </div>

      <div className="content-block">
        <h2>Klantvriendelijkheid Veilig Betalen! Gratis levering</h2>
      </div>
    </div>
  );
};

export default SectionWithImages;
