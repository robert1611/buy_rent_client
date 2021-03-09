import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';
import { server_calls } from './../../api';
import Result from './Result';

const MortgageCalc = ({ isAuthenticated }) => {

  const [response, setResponse] = useState({
    success: false,
    message: 'Fill in the form and submit to get details on Buy vs Rent',
    data: {
      option_result:''
    }
  });
  const [isLoading, setLoading] = useState(false);
  const [errors, setError] = useState({
    zip_code: '',
    credit_score: '',
    years_to_live: ''
  });

  const [data, setData] = useState({
    credit_score: undefined,
    has_been_bankrupt: 0,
    zip_code: undefined,
    years_to_live: 8
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
      credit_score: '',
      years_to_live: ''
    };

    if(!data.zip_code) {
      validationErrors['zip_code'] = "Invalid ZipCode";
      hasError = true;
    }

    if(!data.credit_score) {
      validationErrors['credit_score'] = "Invalid Credit Score";
      hasError = true;
    }

    if(!data.years_to_live) {
      validationErrors['years_to_live'] = "Invalid Number of Years";
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
        <Col sm={12} md={3}>Static Content Here</Col>
          <Col sm={12} md={3}>
            <Form>
              <Form.Group controlId="formZipCode">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  value={data.zip_code} type="text" inputMode="numeric"
                  pattern="^(?(^00000(|-0000))|(\d{5}(|-\d{4})))$" placeholder="Enter Zip Code for HOUSTON metro area only"
                  onChange={(e) => handleChange('zip_code', e)} />
                {
                  errors.zip_code.length > 0 &&
                  <Form.Text className="text-muted text-err">
                    {errors.zip_code}
                  </Form.Text>
                }

                <Form.Text className="text-muted">
                  At present we only support data for Houston (zip codes 77002 - 75999)
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formCreditScore">
                <Form.Label>Credit Score</Form.Label>
                <Form.Control value={data.credit_score} type="number" inputMode="numeric"
                  min="0" max="850" placeholder="Enter Credit Score"
                  onChange={(e) => handleChange('credit_score', e)} />

                {
                  errors.credit_score.length > 0 &&
                  <Form.Text className="text-muted text-err">
                    {errors.credit_score}
                  </Form.Text>
                }

                <Form.Text className="text-muted">
                  Enter your Credit Score (scale of 0 - 850)
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="years_to_live">
                <Form.Label>How Long Do You Plan To Live Here?</Form.Label>
                <Form.Control value={data.years_to_live} type="number" inputMode="numeric"
                  min="0" max="40" placeholder="If not sure enter 8 years - the average time a house is owned"
                  onChange={(e) => handleChange('years_to_live', e)} />

                {
                  errors.years_to_live.length > 0 &&
                  <Form.Text className="text-muted text-err">
                    {errors.years_to_live}
                  </Form.Text>
                }

                <Form.Text className="text-muted">
                If not sure enter 8 years - the average time a house is owned
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
          <Col sm={12} md={3}>
  <div className="text-center">
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
<Col sm={12} md={3}>
  <div className="text-center">
    <h3>Result</h3>
    {
    response.success === false ?
      <div>
        <p></p>
      </div>
    :
      <div>
        <p> You should <b>{response.data.option_result}</b> the house</p>
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