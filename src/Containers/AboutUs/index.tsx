import React from 'react';

import { Container } from 'react-bootstrap';

const AboutUsPage = () => {

  return (
    <div className="text-center">
      <Container>
        <h3 className="ehdn2">About Us and the Buy vs Rent Calculator</h3>
        <div className="privacy-policy-content text-left">
          <p><strong>I'm Rob Dupree, and I'm passionate about real estate.</strong> My wife Rose and I operate a dozen AirBnBs, many of them in Houston.  We enjoy remodeling and designing houses, and the feedback we get from our guests.  We are most familiar with the inner loop (Montrose and the Heights) and Oak Forest, where we live and have several properties. That said, we know the Houston metro area pretty well and can offer great tips and insights.</p>
          

          <p><strong>Unlike the real estate broker you may be dealing with, or the apartment building manager you're talking to, we're NOT trying to sell you anything</strong> Let's face it, people trying to sell you something are almost always looking out for themselves. Maybe your interests align with theirs, or maybe they don't.  We are totally unbiased and are never going to try and sell you a house or offer you a one year lease on an apartment.  But we host 20 unique guests per month, many of whom are relocating and staying are one of our houses for 1-2 weeks.  As such we get a lot of feedback from guests on good apartment buildings, or bad apartment buildings, or why they chose to buy in the neighborhoods they did.  So we're pretty tuned into the market as a result</p>

          <p><strong>Buying a house is often the biggest financial decision of one's life, but it's not entirely a financial decision!!</strong> We've provided a helpful calculator to help guide you to choose buying, or renting.  Before buying, understand that a house is an illiqud asset. Unlike a stock you can sell for virtually no cost, many professionals (brokers, surveyors, bankers, appraisers, inspectors) are needed to facilitate home purchase.  This adds up - the cost to buy and then sell a home - is about 10% of the purchase price.  So if you think you might be moving to another city in a few years, renting is clearly the best option .</p>
          <p>If you're probably staying put for a while, then you should probably lean toward buying.  Factors to consider most closely are:
            <ul>
              <li>How good is your credit?</li>
              <li>Can you come up with enough for the downpayment </li>
              <li>Will you have money set aside to replace a hot water heater</li>
              <li>Try to purchase something where your all in costs are less than 40% of your income</li>
            </ul>

          <p><strong>Lastly, our calculator is meant to be a guide not a litmus test.</strong>  We've baked in a lot of the costs like taxes, insurance, ongoing maintenance, and transaction costs so you can focus on just a few variables.  We also assume you finance the entire purchase in our calculator.  Why? Because you could use this downpayment to invest in a business, stocks, or repay student debt.  When weighing the buying vs renting costs, consider you're locking in most of your costs when you buy, but rents are likely to go up each year.

          </p>
            
            
             

          </p>
        </div>
      </Container>
    </div>
  )
};

export default AboutUsPage;