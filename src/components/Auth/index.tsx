import { Login, Logout } from "../Google";
import  { FbLogin, FbLogout } from "../Facebook";
import { Container, Row, Col } from 'react-bootstrap';

const Auth = ({ isAuthenticated, updateAuthentication }) => {

  const authType = localStorage.getItem('authType');

  return (
    <Container>

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
          <Col md={6}><FbLogin updateAuthentication={updateAuthentication} /></Col>
          <Col md={6}><Login updateAuthentication={updateAuthentication} /></Col>
        </Row>


      }

    </Container>
  )
};

export default Auth;