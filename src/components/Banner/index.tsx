import React from 'react';
import BannerImage from './../../assets/img/banner.jpeg';
import './style.css';

const Banner = () => {
  return (
    <div>
      <img src={BannerImage} className="banner-img" alt="banner-img" />
    </div>
  )
};

export default Banner;