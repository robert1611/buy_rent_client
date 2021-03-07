import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner';
import HowItWorks from '../../components/HowItWorks';
import Testimonials from '../../components/Testimonials';

const HomePage = () => {

  return (
    <div>
      <Banner />
      <Container>
        <Row className="justify-content-md-center">
          <HowItWorks />
        </Row>
      </Container>
      <Container>
        <Testimonials />
      </Container>
    </div>
  )
};

export default HomePage;