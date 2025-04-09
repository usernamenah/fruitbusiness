import React from "react";
import "./LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuth }) => {
    const navigate = useNavigate();

    const handleLoginSuccess = async (credentialResponse) => {
      try {
        const response = await fetch("http://localhost:5000/api/google-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ token: credentialResponse.credential }),
        });
        console.log(response )
        if (response.ok) {
          setIsAuth(true);
          navigate("/home");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    };
    
    return (
        <div className="login-container">
            <div className="login-box">
                <h1 className="login-title">
                    Welcome to <span className="brand-name">Blooming Bowl</span>
                </h1>
                <p className="login-subtitle">Sign in to continue your healthy journey</p>
                <GoogleLogin
                    className="login-button"
                    onSuccess={handleLoginSuccess}
                    onError={() => console.log("Login Failed")}
                    />
            </div>
        </div>
    );
};

export default LoginPage;






