import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth';
import GithubLogo from './github.png';
import FacebookLogo from './facebook.png';
import AirbnbLogo from './airbnb.png';
import LinkedinLogo from './linkedin.png';
import EnvelopeLogo from './email.png';
import PhoneLogo from './phone.png';





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
      <Navbar className="navbar" variant="dark">
        <Container fluid={true}>
          <Row className="full-width" noGutters={true}>
            <Col md={4} sm={4}>
              <Navbar.Brand className="navbar-head">
                Calculator
              </Navbar.Brand>
              </Col>
              <Col md={4} sm={4}>
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
            </Col>
            <Col md={4} sm={12}>
              <Auth isAuthenticated={isAuthenticated} updateAuthentication={updateAuthentication} />
            </Col>
          </Row>
        </Container>
      </Navbar>
      <div className="content">
        <div className="content-inside">
          {children}
        </div>

      </div><footer className="footer">
    <div>
      <a href="https://www.airbnb.com/users/115702888/listings"target="_blank">AirBnB   </a>
      <img src={AirbnbLogo} width="45"></img>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/robert-dupree-40a6a750" target="_blank">LinkedIn  </a>
      <img src={LinkedinLogo} width="30"></img>
    </div>
    <div>
      <a href="#">Facebook   </a>
      <img src={FacebookLogo} width="40"></img>
    </div>
    <div>
      <a href="https://github.com/robert1611" target="_blank">Github   </a>
      <img src={GithubLogo} width="30"></img>

    </div>
    <div>
      <a href="https://mail.google.com/mail/u/?authuser=robert1611@gmail.com">Email    </a>
      <img src={EnvelopeLogo} width="30"></img>
    </div>
    <div>
      <a href="#">Phone    </a>
      <img src={PhoneLogo} width="30"></img>
    </div>
  </footer>









    </div>
  );
}

export default MainLayout;