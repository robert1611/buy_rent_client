import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Banner from '../../components/Banner';
import HowItWorks from '../../components/HowItWorks';

const HomePage = () => {

  return (
    <div>
      <Banner />
      <Container>
        <Row className="justify-content-md-center">
          <HowItWorks />
        </Row>
      </Container>

    </div>
  )
};

export default HomePage;