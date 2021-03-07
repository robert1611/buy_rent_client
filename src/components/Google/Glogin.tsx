import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from './../../utils/refreshToken';

const clientId = '554156487099-0kqa8odf9oaa5ajl2mtrlnbdhs50nr1n.apps.googleusercontent.com'

function Login() {

  const onSuccess = (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res)
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

function Logout() {
  const onSuccess = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authType");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess} />
    </div>
  );
}

export { Login, Logout};