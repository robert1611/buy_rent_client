import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import logo from './../../assets/img/homey.jpg';

const MainLayout = ({ children}) => {

  const menuItems = [{
    route: '/',
    name: 'Home'
  }, {
    route: '/about-us',
    name: 'About Us'
  }]

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
              alt="Homey"
              src= { logo }
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          <Link to='/'>Helpful Info Provided</Link>
        </Navbar.Brand>
        <div>
          {children}
        </div>
      </Navbar>
    </div>
  );
}

export default MainLayout;