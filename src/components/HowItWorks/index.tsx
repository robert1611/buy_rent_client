import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';


import Step1Image from './../../assets/img/step1.jpeg';
import Step2Image from './../../assets/img/step2.jpeg';
import Step3Image from './../../assets/img/step3.jpeg';
import './style.css';


const HowItWorks = () => {

  const cardContents = [{
    title: 'Step 1',
    image: Step1Image,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis, dui at tristique tempor, risus arcu volutpat libero, in tempus sapien nisl id lacus.',
  }, {
    title: 'Step 2',
    image: Step2Image,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis, dui at tristique tempor, risus arcu volutpat libero, in tempus sapien nisl id lacus.',
  }, {
    title: 'Step 3',
    image: Step3Image,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis, dui at tristique tempor, risus arcu volutpat libero, in tempus sapien nisl id lacus.',
  }]


  return (
    <Container fluid>
      <Row>
        {
          cardContents.map(cardContent => {
            return (
              <Col sm={12} md={4}>
                <Card>
                  <Card.Title className="card-title">{cardContent.title}</Card.Title>
                  <Card.Body>
                    <Card.Img className="card-img" variant="top" src={cardContent.image} />
                    <hr />
                    <Card.Text>
                      {cardContent.content}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            )
          })
        }
      </Row>
    </Container>
  )
};

export default HowItWorks;