import React from "react";
import Router from 'next/router'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Cookies from "js-cookie";

const Home = (props) => {
    const handleLogout = () => {
        Cookies.remove('user_signed')
        Router.push('/')
    }

    const handleSignedUser = (params) => {
        if (!params) return handleLogout();

        // const user_signed = Cookies.get('user_signed');
        // console.log("🚀 ~ file: index.js ~ line 13 ~ handleLogin ~ user_signed", user_signed)
    }

    return (
        <div>
            <h1>Home</h1>

            <button onClick={() => Router.push('/')}>Go back signin</button>

            <GoogleLogin
                clientId="248218946968-bukc9dtcvnr15hh2g9u1l8ie8uqbg6f3.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleSignedUser}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={renderProps => {
                    <></>
                }}
                onAutoLoadFinished={handleSignedUser}
            />

            <br />

            <GoogleLogout
                clientId="248218946968-bukc9dtcvnr15hh2g9u1l8ie8uqbg6f3.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={handleLogout}
            />
        </div>
    );
};

export default Home;