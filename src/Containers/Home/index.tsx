import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner';
import HowItWorks from '../../components/HowItWorks';
import MortgageCalc from '../../components/MortgageCalc';
import Testimonials from '../../components/Testimonials';


const HomePage = ({ isAuthenticated }) => {

  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="page-section page-section-form">
        <Container fluid>
          <MortgageCalc isAuthenticated={isAuthenticated} />
        </Container>
      </div>
      <div className="page-section page-section-alt">
        <Container >
          <Row className="justify-content-md-center">
            <HowItWorks />
          </Row>
        </Container>
      </div>
      <Container className="page-section">
        <Testimonials />
      </Container>
    </div>
  )
};

export default HomePage;