import React from 'react';
import { render } from 'react-dom';
//added in tsconfig "noImplicitAny" : false
import reportWebVitals from './reportWebVitals';
import { Home, CreateInquiry, Prompts } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav} from 'react-bootstrap';
import logo from './assets/img/homey.jpg';
import './styles.css';

//Imports From React-Router-Type
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
}
from 'react-router-dom';

render(
    <React.StrictMode>
        <Router>
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
                {/* Nav Items to the right */}
                <Nav className="move-nav" activeKey='/'>
                   
                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/'>Home </Link>   
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/create'>Create Inquiry </Link>   
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link to='/prompts'>Provide Your Info Here</Link>
                        </Nav.Link>
                    </Nav.Item>
                
                </Nav>
            </Navbar>

            <Switch>
                <Route exact path='/'>
                    <Home title="Buy or Rent" />
                </Route>
                <Route path='/create'>
                    <CreateInquiry />
                </Route>
                <Route path='/prompts'>
                    <Prompts />
                </Route>

            </Switch>

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);