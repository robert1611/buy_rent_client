import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../components/Auth';
import GithubLogo from './github.png'




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
        <Navbar.Brand className="navbar-head">
         
          Calculator to Help You Decide - Buy or Rent
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
        
      </div><footer className="footer">
    <div>
      <a href="https://www.airbnb.com/users/115702888/listings"target="_blank">AirBnB</a>
      <span> Listing Page</span>
    </div>
    <div>
      <a href="https://www.vrbo.com/pxe/feed/121.4530204.5134101" target="_blank">VRBO</a>
      <span> Listing Page</span>
    </div>
    <div>
      <a href="#">Facebook</a>
      <span>Symbol</span>
    </div>
    <div>
      <a href="https://github.com/robert1611" target="_blank">Github   </a>
      <img src={GithubLogo} width="30"></img>
      
    </div>
    <div>
      <a href="https://mail.google.com/mail/u/?authuser=robert1611@gmail.com">Email</a>
      <span>robert1611@gmail.com</span>
    </div>
    <div>
      <a href="#">Phone</a>
      <span>346-493-3487</span>
    </div>
  </footer>



      
      
  



    </div>
  );
}

export default MainLayout;