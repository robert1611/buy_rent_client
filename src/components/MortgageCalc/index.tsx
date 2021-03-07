import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { server_calls } from './../../api';
import Result from './Result';

const MortgageCalc = ({ isAuthenticated }) => {

  const [response, setResponse] = useState({
    success: false,
    message: 'Fill in the form and submit to get details on Buy vs Rent',
    data: {}
  });
  const [isLoading, setLoading] = useState(false);
  const [errors, setError] = useState({
    zip_code: '',
    credit_score: ''
  });

  const [data, setData] = useState({
    credit_score: undefined,
    has_been_bankrupt: 0,
    zip_code: undefined
  });

  const handleChange = (k: string, e: any): void => {
    const { value } = e.currentTarget;
    setData({...data, ...{[k]: value}});
  }

  const submitMortgageCalculation = async (e) => {
    e.preventDefault();

    setLoading(true);

    let hasError = false;
    let validationErrors = {
      zip_code: '',
      credit_score: ''
    };

    if(!data.zip_code) {
      validationErrors['zip_code'] = "Invalid ZipCode";
      hasError = true;
    }

    if(!data.credit_score) {
      validationErrors['credit_score'] = "Invalid Credit Score";
      hasError = true;
    }

    setError(validationErrors);
    if(!hasError) {

      try {
        const result = await server_calls.mortgageCalc(data);
        setResponse(result);
      } catch(er) {
        alert('Error Calculating Mortgage');

      }

    }

    setLoading(false);

  };


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
                {
                  errors.zip_code.length > 0 &&
                  <Form.Text className="text-muted text-err">
                    {errors.zip_code}
                  </Form.Text>
                }

                <Form.Text className="text-muted">
                  At present we only support data for Houston
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCreditScore">
                <Form.Label>Credit Score</Form.Label>
                <Form.Control value={data.credit_score} type="number" inputMode="numeric"
                  min="0" max="900" placeholder="Enter Credit Score"
                  onChange={(e) => handleChange('credit_score', e)} />

                {
                  errors.credit_score.length > 0 &&
                  <Form.Text className="text-muted text-err">
                    {errors.credit_score}
                  </Form.Text>
                }

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

              <Button disabled={isLoading || !isAuthenticated} block variant="success" type="submit"  onClick={!isLoading ? submitMortgageCalculation : undefined}>
                {
                  isLoading &&
                  <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                  </Spinner>
                }
                {
                isAuthenticated ? 'Calculate' : 'Login Before Calculation'}
              </Button>
            </Form>
          </Col>
          <Col sm={12} md={6}>
            <div className="text-center">
              <h3>Result</h3>
            {
              response.success === false ?
                <div>
                  <p>{response.message}</p>
                </div>
              :
                <div>
                  <Result data={response.data} />
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