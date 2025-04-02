import React from "react";
import "./LoginPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleLoginSuccess = async (credentialResponse) => {
    try {
      const response = await fetch("https://fruitbusinessbackend.vercel.app/api/google-login", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${credentialResponse.credential}`
        },
        credentials: "include",
        body: JSON.stringify({ token: credentialResponse.credential }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setIsAuth(true);
        navigate("/home");
      } else {
        console.error("Login failed:", data.error);
      }
    } catch (error) {
      console.error("Network error:", error);
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
          useOneTap
          auto_select
        />
      </div>
    </div>
  );
};

export default LoginPage;



// import React from "react";
// import "./LoginPage.css";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
    //     const navigate = useNavigate();
    
    //     const handleLoginSuccess = (credentialResponse) => {
//         const decodedToken = jwtDecode(credentialResponse.credential);
//         console.log("User Info:", decodedToken);

//         localStorage.setItem("token", credentialResponse.credential);
//         navigate("/home");
//     };

//     return (
    //         <div className="login-container">
    //             <div className="login-box">
    //                 <h1 className="login-title">Welcome to <span className="brand-name">Blooming Bowl</span></h1>
    //                 <p className="login-subtitle">Sign in to continue your healthy journey</p>
    //                 <GoogleLogin 
    //                     className="login-button"
    //                     onSuccess={handleLoginSuccess}
    //                     onError={() => console.log("Login Failed")}
    //                 />
    //             </div>
    //         </div>
    //     );
    // };
    
    // export default LoginPage;
    
    // import React from "react";
// import "./LoginPage.css";
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// const LoginPage = () => {
    //     const navigate = useNavigate();
    
    //     const handleLoginSuccess = (credentialResponse) => {
        //         // Decode the Google token
        //         const decodedToken = jwtDecode(credentialResponse.credential);
        //         console.log("Decoded Token:", decodedToken);
        //         console.log("yeah confirmed");
        
        //         // Store token in localStorage
        //         localStorage.setItem("token", credentialResponse.credential);
        //         console.log(localStorage.getItem("token"));
        
        //         // Redirect to home page
        //         navigate("/home");
        //     };
        
        //     return (
            
        //         <div>
        //             <div className="borderoflogin">
        //                 <center>
        
        //                     <div className="containerfulid">
        //                         <div className="box">
        
        
        //                             <div className="logintext">
        //                                 <center>
        //                                     <div className="welcomegreet">
        //                                         HI .....!
        //                                     </div>
        //                                     <div className="welcometext">
        //                                       welcome to  BLOOMING BOWL
        //                                     </div>
        
        
        
        //                                     <h2>Login with Google</h2>
        //                                     <GoogleLogin className="logindabba"
        //                                         onSuccess={handleLoginSuccess}
        //                                         onError={() => console.log("Login Failed")}
        //                                     />
        //                                 </center>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </center>
        //             </div>
        
//         </div>
//     );
// };

// export default LoginPage;


    // const handleLoginSuccess = (credentialResponse) => {
    //     const decodedToken = jwtDecode(credentialResponse.credential);
    //     console.log("User Info:", decodedToken);

    //     // Store token in a cookie (Expires in 1 hour)
    //     Cookies.set("authToken", credentialResponse.credential, {
    //         expires: 0.5, // 12 hours expiry
    //         secure: false, // Change to true when using HTTPS
    //         sameSite: "Strict", // Protect against CSRF attacks
    //     });

    //     window.location.href = "/home";
    // };