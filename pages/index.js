import React from "react";
import Router from 'next/router'
import { GoogleLogin } from 'react-google-login';
import Cookies from 'js-cookie';
import { GOOGLE_CLIENT_ID } from "../config";

const App = (props) => {
  const handleLogin = (params) => {
    console.log("🚀 ~ file: index.js ~ line 9 ~ handleLogin ~ params", params)
    if (!params?.tokenId) return;

    const email = params.profileObj.email;
    const tokenId = params.tokenId;

    Cookies.set('user_signed', JSON.stringify({ email, tokenId }))
    Router.push('/home');
  }

  console.log('GOOGLE_CLIENT_ID', GOOGLE_CLIENT_ID)

  return (
    <div>
      <h1>Sign-in Page</h1>

      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />

      <button onClick={() => Router.push('/home')}>Go to home</button>
    </div>
  );
};

export default App;