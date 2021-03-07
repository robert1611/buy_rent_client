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
        <div className="pull-right">
          <Auth isAuthenticated={isAuthenticated} updateAuthentication={updateAuthentication} />
        </div>
      </Navbar>
      <div>
        {children}
      </div>
      <div className="page-section page-section-alt">
          <Container>
            <Row>
              <Col sm={12} md={4}>
                <img className="footer-logo" src={logo} alt="footer-logo" />
              </Col>
              <Col sm={12} md={4}>
                <h4>Links</h4>
                <ul className="">
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
                  660  Langtown Road, Toledo, OH
                </p>
                <p>
                  +01 - 567-246-6833 / +01 - 419-743-2647
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