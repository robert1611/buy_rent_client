import { Login, Logout } from "../Google";
import  { FbLogin, FbLogout } from "../Facebook";
import { Container, Row, Col } from 'react-bootstrap';

const Auth = ({ isAuthenticated, updateAuthentication }) => {

  const authType = localStorage.getItem('authType');

  return (
    <Container fluid className="auth-container text-right">

      {
        isAuthenticated === true
        ?
        <Row className="full-width" noGutters={true}>
          <Col md={8} sm={12}>&nbsp;</Col>
          {
          authType == 'google' ?
            <Col md={4} sm={6} className="no-mob-left-padding margin-bottom-5">
              <Logout updateAuthentication={updateAuthentication}  />
            </Col>
          :
            <Col md={4} sm={6} className="no-mob-left-padding">
              <FbLogout updateAuthentication={updateAuthentication}  />
            </Col>
          }
        </Row>
        :
        <Row className="full-width" noGutters={true}>
          <Col md={5} sm={12}>&nbsp;</Col>
          <Col md={4} sm={6} className="no-mob-left-padding"><FbLogin updateAuthentication={updateAuthentication} /></Col>
          <Col md={3} sm={6} className="no-mob-left-padding"><Login updateAuthentication={updateAuthentication} /></Col>
        </Row>


      }

    </Container>
  )
};

export default Auth;