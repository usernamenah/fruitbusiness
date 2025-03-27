import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";
import Cookies from "js-cookie"; 
import { useState, useEffect } from "react";

const App = () => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        // Check authentication when the app starts
        setIsAuth(Cookies.get("authToken") !== undefined);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Redirect to home if already logged in */}
                <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <LoginPage />} />

                {/* Protect Home Page */}
                <Route path="/home" element={isAuth ? <HomePage /> : <Navigate to="/login" />} />

                {/* Redirect unknown routes to login */}
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
