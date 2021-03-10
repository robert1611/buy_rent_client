import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import FamilyPhoto from './family.jpg';

const AboutUsPage = () => {

  return (
    <div className="text-center">
      <Container fluid>
        <Row>
        <Col sm={12} md={4} className="family-photo">

        <img src={FamilyPhoto} width="100%" height="100%"></img>



        </Col>
        <Col sm={12} md={8} className="write-up">
        
        <h3 className="ehdn2">About Us and the Buy vs Rent Calculator</h3>
        <div className="privacy-policy-content text-left">
          <p><strong>I'm Rob Dupree, and I'm passionate about real estate.</strong> My wife Rose and I operate a dozen AirBnBs, many of them in Houston.  We enjoy remodeling and designing houses, and the interaction with our guests.  We live in the Oak Forest section of Houston, or GOOF for those in the know.</p>
          

          <p><strong>Helpful, Unbiased Advice  </strong>     Unlike virtually everyone else you'll come across, we're not trying to sell you anything.  We're pretty tuned into the market because host 25 unique guests per month in Houston, many of whom are relocating.  So we have a consistent feedback loop with many people in exactly your position.</p>

          <p><strong>Most Important Factors To Weigh</strong> </p>
            <ul>
              <li><strong>How long do you plan to live in the house?</strong></li><p>It costs about $30,000 to buy and sell a house.  $3,500 /year on average but $10,000 per year if you only live there 3 years</p>
              <li><strong>How good is your credit?</strong></li><p>A high credit score (720 or better) allows you access to the best rates.  If not, try to qualify for an FHA loan, or if you're a veteran, a VA loan</p>
              <li><strong>Down payment</strong></li><p>You don't always need 20%. The VA will requires little money down, and FHA only 3.5%. But below 20% requires extra monthly fees called PMI</p>
              <li><strong>Have funds set aside for emergencies</strong></li><p>Be prepared to lumpy expenses like a roof reapir or new hot water heater</p>
              <li><strong>Stay within budget.</strong></li><p>Whether you buy or rent, try to spend no more than 40% of your income on housing</p>
            </ul>

          <p><strong>How is our calculator different than all the rest?</strong></p>
          <ul>
              <li><strong>Fewer Inputs</strong></li><p>Why enter well known costs that can easily be caculated off your purchase price? <br></br> Based off your purchase price, effective property tax rates are roughly 1.82%, insurance costs 0.8%, ongoing maintence costs 1% , and buy / sell costs 10%</p>
              <li><strong>You actually get an answer!</strong></li><p>Ever answer two dozen questions only to be told that someone will get back to you. Us too!</p>
              <li><strong>Different Approach</strong></li>
              
              <ul>
              <li>We calculate an interest rate against the entire cost of purchase, not just the loan.  Why? Because the downpayment could used for something else.</li>
              <li>We don't include repayment of principal, just the interest.</li>
              <li>We build in transaction costs at the time of the decision</li>
              <li>Rents will likely increase, but home ownership costs are somewhat fixed. So we compare buy vs average rent <u>over the next 5 years</u> </li>

              </ul>
                         
            </ul>
        
        </div>
        </Col>
        </Row>
      </Container>
    </div>
  )
};

export default AboutUsPage;