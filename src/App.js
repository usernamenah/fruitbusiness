import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import BookingPage from "./components/Booking.js"
// import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [authChecked, setAuthChecked] = useState(false); 

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch("http://localhost:5000/check-auth", {
                    credentials: 'include',
                });
                // if (response.ok) {
                //     setIsAuth(true);
                // } else {
                //     setIsAuth(false);
                // }
                setIsAuth(response.ok);
            } catch (error) {
                setIsAuth(false);
            } finally {
                setTimeout(() => setAuthChecked(true), 2000);
            }
        };
        checkAuth();
    }, []);
    if (!authChecked) {
        return <div>Loading...</div>;
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={isAuth ? <Navigate to="/home" /> : <LoginPage setIsAuth={setIsAuth } />}
                />
                <Route
                    path="/home"
                    element={isAuth ? <HomePage /> : <Navigate to="/login" />}
                />
                <Route
                    path="/book"
                    element={isAuth ? <BookingPage/> : <Navigate to="/login" />}
                />
                
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App;



// import './App.css';
// import Login from  "./components/LoginPage.js";
// import Home from "./components/HomePage.js"

// function App() {
//   return (
//     <div className="App">
//       <Login/>
//       <Home/>
//     </div>
//   );
// }

// export default App;
