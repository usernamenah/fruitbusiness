import React from "react";
import "./LoginPage.css"
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

const Login = () => {
    return (
        <div className="logintext">
            this is login  brooo
            <button className="logindabba">
            <GoogleLogin
                onSuccess={credentialResponse => {

                    const jetdecoderesponseafterdecode = jwtDecode(credentialResponse.credential)
                    console.log(jetdecoderesponseafterdecode);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />

            </button>
        </div>


    );
}

export default Login;