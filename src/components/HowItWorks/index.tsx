import React from 'react';

import { Container, Row, Col, Card } from 'react-bootstrap';


import Step1Image from './../../assets/img/houston.jpg';
import Step2Image from './../../assets/img/pro_con.jpg';
import Step3Image from './../../assets/img/prepared.jpg';
import Step4Image from './../../assets/img/microscope.jpg';
import Step5Image from './../../assets/img/scales.jpg';
import Step6Image from './../../assets/img/thoughts.jpg'


import './style.css';


const HowItWorks = () => {

  const cardContents = [{
    title: 'About Houston, TX',
    image: Step1Image,
    content: "Houston Metro is home to 7.1 million people. The area covers 9,400 square miles, which is larger than New Jersey!!. This gives you a wide range of options, from the piney suburbs north of Houston to beaches and everywhere in between"
  }, {
    title: "Pro and Cons of Buying a Home ",
    image: Step2Image,
    content: "Home ownership offers stability and a chance to build equity, but carries risks (see Financial Crisis). Renting offers flexibility, fewer headaches, and doesn't tie money up (downpayment).  Only consider buying if you'll own at least 5 years"
  }, {
    title: 'If you want to buy, BE PREPARED',
    image: Step3Image,
    content: "Limited inventory (48 days) indicates a SELLER'S market.  If you want to buy, have you s#@t together.  Don't sweat things you can easily change (i.e, paint color). Move quickly on something you like, but set limits so you don't get pulled in a bidding war.",
  }, {
    title: 'Check Your Sources',
    image: Step4Image,
    content: 'Zillow BADLY underesimtates Houston home prices, but its rent estimates are accurate. Median home price info is often misleading. Listed houses are newer and bigger than average housing stock.  The Houston Association of Realtors (HAR) has good data on sales prices and comps',
  }, {
    title: 'Roughly Even Own/Rent Split',
    image: Step5Image,
    content: "This often surpises outsiders who expect home ownership to be at or above the national average of 67%.  Houston has a well supplied apartment market - it's easy to permit, build and attract capital - that means tenants usually have a lot of options",
  }, {
    title: "Additional Things to Consider...",
    image: Step6Image,
    content: "Houston has a strong job market and no state income taxes...but has some of the highest property taxes, and pretty epic floods.  Factor in those higher property taxes, insurance costs, and repairs",
  },
]





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