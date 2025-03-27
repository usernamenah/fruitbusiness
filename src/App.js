import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage.js";
import HomePage from "./components/HomePage.js";

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return Cookies.get("authToken") !== undefined; 
};

function App() {
  return (
    <Router>
        
          {/* Redirect to home if already logged in 
          
          this is for loged in things and need more things to add  
          
          */}
        {/* <Route 
          path="/login" 
          element={isAuthenticated() ? <Navigate to="/home" /> : <LoginPage />} 
        /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        {/* Protect Home Page */}
        <Route
          path="/home"
          element={isAuthenticated() ? <HomePage /> : <Navigate to="/login" />}
        />

        {/* Redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

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
