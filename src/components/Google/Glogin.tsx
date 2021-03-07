import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = '554156487099-0kqa8odf9oaa5ajl2mtrlnbdhs50nr1n.apps.googleusercontent.com'

function Login() {
    const onSuccess = (res) => {
        console.log('[Login Success] currentUser:', res.profileObj);
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

export default Login;