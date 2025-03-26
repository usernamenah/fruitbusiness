import React from "react";
import "./LoginPage.css";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = (credentialResponse) => {
        // Decode the Google token
        const decodedToken = jwtDecode(credentialResponse.credential);
        console.log("Decoded Token:", decodedToken);
        console.log("yeah confirmed");

        // Store token in localStorage
        localStorage.setItem("token", credentialResponse.credential);
        console.log(localStorage.getItem("token"));

        // Redirect to home page
        navigate("/home");
    };

    return (

        <div>
            <div className="borderoflogin">
                <center>

                    <div className="containerfulid">
                        <div className="box">


                            <div className="logintext">
                                <center>

                                    <h2>Login with Google</h2>
                                    <GoogleLogin className="logindabba"
                                        onSuccess={handleLoginSuccess}
                                        onError={() => console.log("Login Failed")}
                                    />
                                </center>
                            </div>
                        </div>
                    </div>
                </center>
            </div>

        </div>
    );
};

export default LoginPage;
