import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from './../../utils/refreshToken';
import { server_calls } from './../../api';

const clientId = '554156487099-0kqa8odf9oaa5ajl2mtrlnbdhs50nr1n.apps.googleusercontent.com'

function Login({updateAuthentication}) {

  const onSuccess = async (res) => {
    console.log('[Login Success] currentUser:', res.profileObj);
    refreshTokenSetup(res);

    await server_calls.userAuth({
      email: res.profileObj.email,
      google_id: res.profileObj.googleId,
      display_name: `${res.profileObj.givenName} ${res.profileObj.familyName}`
    });

    updateAuthentication(true);

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
        isSignedIn={true}
      />
    </div>
  );
}

function Logout({updateAuthentication}) {
  const onSuccess = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authType");

    updateAuthentication(false);
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