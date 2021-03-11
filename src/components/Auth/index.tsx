import { Login, Logout } from "../Google";
import  { FbLogin, FbLogout } from "../Facebook";
import { Container, Row, Col } from 'react-bootstrap';

const Auth = ({ isAuthenticated, updateAuthentication }) => {

  const authType = localStorage.getItem('authType');

  return (
    <Container className="auth-container">

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
        <Row>
          <Col md={6} className="no-mob-left-padding"><FbLogin updateAuthentication={updateAuthentication} /></Col>
          <Col md={6} className="no-mob-left-padding"><Login updateAuthentication={updateAuthentication} /></Col>
        </Row>


      }

    </Container>
  )
};

export default Auth;