import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import BannerImage from './../../assets/img/banner.jpeg';
import './style.css';

const Banner = () => {
  return (
    <div>
      <img src={BannerImage} className="banner-img" />
    </div>
  )
};

export default Banner;