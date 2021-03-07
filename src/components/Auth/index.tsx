import { Login, Logout } from "../Google";

const Auth = ({ isAuthenticated, updateAuthentication }) => {

  return (
    <div>
      {
        isAuthenticated === true
        ?
        <Logout updateAuthentication={updateAuthentication}  />
        :
        <Login updateAuthentication={updateAuthentication} />

      }

    </div>
  )
};

export default Auth;