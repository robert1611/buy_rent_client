import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth';

import logo from './../../assets/img/homey.jpg';

const MainLayout = ({ children, isAuthenticated, updateAuthentication}) => {

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
          <Link to='/'>Calculator to Help You Decide - Buy or Rent</Link>
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
        <div className="pull-right">
          <Auth isAuthenticated={isAuthenticated} updateAuthentication={updateAuthentication} />
        </div>
      </Navbar>
      <div className="content">
        <div className="content-inside">
          {children}
        </div>
      </div>
      <div className="footer page-section page-section-alt">
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <img className="footer-logo" src={logo} alt="footer-logo" />
              </Col>
              <Col sm={12} md={4}>
                <h4>Find Us On AirBnB and VRBO</h4>
                <ul className="footer-links">
                  <li>
                    <a href='/'> Home</a>
                  </li>
                  <li>
                    <a href='/about-us'> About Us</a>
                  </li>
                </ul>
              </Col>
              <Col sm={12} md={4}>
                <h5>Contact Us</h5>
                <p>
                  123 Main Street, Houston, TX 77092
                </p>
                <p>
                  346-493-3487
                </p>
                <p>

                </p>
              </Col>
            </Row>
          </Container>
      </div>
    </div>
  );
}

export default MainLayout;