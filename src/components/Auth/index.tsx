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
        (
          authType == 'google' ?
          <Logout updateAuthentication={updateAuthentication}  />
          :
          <FbLogout updateAuthentication={updateAuthentication}  />
        )
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