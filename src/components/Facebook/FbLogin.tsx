import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { Button } from 'react-bootstrap';
import { server_calls } from './../../api';

const APP_ID = "763928047580916";

function FbLogin({updateAuthentication}) {

  const onSuccess = async (res) => {
    console.log('[Login Success] currentUser:', res);

    await server_calls.userAuth({
      email: res.email,
      google_id: res.id,
      display_name: `${res.name}`,
      authType: 'facebook'
    });

    updateAuthentication(true);

  };

  const onFailure = (res) => {
    console.log('[Login failed] res:', res)
  };


  return (
    <FacebookLogin
      appId={APP_ID}
      autoLoad={false}
      size={"small"}
      fields="name,email"
      cssClass="facebook-button-cls"
      icon="fa-facebook"
      textButton="Login"
      callback={onSuccess} />
  )
}

function FbLogout({updateAuthentication}) {

  const onLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("authType");
    updateAuthentication(false);
  };

  return(
    <Button className="facebook-button-cls" onClick={onLogout}>
      <i className="fa fa-facebook" />
      Logout
    </Button>
  )
}

export { FbLogin, FbLogout };

