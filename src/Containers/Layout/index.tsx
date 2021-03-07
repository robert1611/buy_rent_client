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
        <Nav className="move-nav" activeKey='/'>
          {
            menuItems.map(menuItem => {
              return (
                <Nav.Item>
                  <Nav.Link>
                      <Link to={menuItem.route}>{menuItem.name}</Link>
                  </Nav.Link>
                </Nav.Item>
              )
            })
          }
        </Nav>
      </Navbar>
      <div>
        {children}
      </div>
    </div>
  );
}

export default MainLayout;