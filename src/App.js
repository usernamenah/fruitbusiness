import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/Booking.js";
import ProfilePageforCustomer from "./components/ProfileCustomer.js";
import 'ldrs/ring'
import { grid } from 'ldrs'
// import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [authChecked, setAuthChecked] = useState(false); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("https://fruitbusinessbackend.vercel.app/check-auth", {
                    credentials: 'include',
                });
                if (response.ok) {
                    setIsAuth(true);
                } else {
                    setIsAuth(false);
                }
                setIsAuth(response.ok);
            } catch (error) {
                setIsAuth(false);
            } finally {
                setTimeout(() => setAuthChecked(true), 5000);
            }
        };
        checkAuth();
    }, []);
    grid.register()
    if (!authChecked) {
        return <div className='loader'>
<l-grid
  size="800"
  speed="1.5" 
  color="orange" 
></l-grid></div>;
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={isAuth ? <Navigate to="/home" /> : <LoginPage setIsAuth={  setIsAuth } />}
                />
                <Route
                    path="/home"
                    element={isAuth ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/book"
                    element={isAuth ? <BookingPage/> : <Navigate to="/login" />}
                />
                <Route
                    path="/profilecustomer"
                    element={isAuth ? <ProfilePageforCustomer/> : <Navigate to="/home" />}
                />
                
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;



