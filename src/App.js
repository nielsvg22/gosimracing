// App.js

import React from 'react';
import Navbar from './pages/NavBar';
import Banner from './pages/Banner';
import PopularProducts from './pages/PopularProducts';
import BannerWithText from './pages/BannerWithText';
import SectionWithImages from './pages/SectionWithImages';


const App = () => {
  return (
    <div>
      <Navbar />
     <Banner/>
     <PopularProducts/>
     <BannerWithText/>

    </div>
  );
};

export default App;
