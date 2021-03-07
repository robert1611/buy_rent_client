import { Login, Logout } from "../Google";

const Auth = () => {

  const authToken = localStorage.getItem('accessToken');
  let isAuthenticated = false;
  if (authToken && authToken.length > 0) {
    isAuthenticated = true;
  }

  return (
    <div>
      {
        isAuthenticated === true
        ?
        <Logout />
        :
        <Login/>

      }

    </div>
  )
};

export default Auth;