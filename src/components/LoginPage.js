import React,{useState} from "react";
import "./LoginPage.css";
import 'ldrs/ring'
import { grid } from 'ldrs'

import { GoogleLogin } from "@react-oauth/google";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const [loader ,setLoader ] = useState(false);

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      setLoader(true); // Show loader right away
  
      const response = await fetch("https://fruitbusinessbackend.vercel.app/api/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ token: credentialResponse.credential }),
      });
  
      if (response.ok) {
        setIsAuth(true);
        
        
        setTimeout(() => {
          navigate("/home");
        }, 5000); 
  
      } else {
        setLoader(false); // Stop loader if login fails
        console.error("Login failed:", response);
      }
  
    } catch (error) {
      setLoader(false);
      console.error("Error during login:", error);
    }
  };
  grid.register()

  if (loader) {
    return <div className='loader'>
      <l-grid
        size="1000"
        speed="1.5"
        color="orange"
      ></l-grid></div>;
  }

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






