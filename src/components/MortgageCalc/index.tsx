import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const MortgageCalc = () => {

  const [response, setResponse] = useState();

  const [data, setData] = useState({
    credit_score: undefined,
    has_been_bankrupt: 0,
    zip_code: undefined
  });

  const handleChange = (k: string, e: any): void => {
    const { value } = e.currentTarget;
    setData({...data, ...{[k]: value}});
  }


  return (
    <div>
      <Container fluid>
        <Row>
          <Col sm={12} md={6}>
            <Form>
              <Form.Group controlId="formZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  value={data.zip_code} type="text" inputMode="numeric"
                  pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" placeholder="Enter Zip Code"
                  onChange={(e) => handleChange('zip_code', e)} />
                <Form.Text className="text-muted">
                  At present we only support data for Houston
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCreditScore">
                <Form.Label>Credit Score</Form.Label>
                <Form.Control value={data.credit_score} type="number" inputMode="numeric"
                  min="0" max="900" placeholder="Enter Credit Score"
                  onChange={(e) => handleChange('credit_score', e)} />
                <Form.Text className="text-muted">
                  Enter your Credit Score
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCreditScore">
                <Form.Label>Bankrupt in last 4 years?</Form.Label>
                <br/>
                <Button as="input"  type="button" variant={data.has_been_bankrupt === 1 ? 'primary': 'light'} value="Yes" onClick={(e) => setData({...data, ...{ has_been_bankrupt: 1}})} />{' '}
                <Button as="input" type="button" variant={data.has_been_bankrupt === 0 ? 'primary': 'light'}  value="No" onClick={(e) => setData({...data, ...{ has_been_bankrupt: 0}})} />{' '}


                <Form.Text className="text-muted">
                  Did you file bankruptcy in last 4 years?
                </Form.Text>

              </Form.Group>

              <Button variant="success" type="submit">
                Calculate
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <div className="text-center">
              <h3>Result</h3>
            {
              response ?
              null
              :
                <div>
                  Fill in the form and submit to get details on Buy vs Rent
                </div>
            }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default MortgageCalc;