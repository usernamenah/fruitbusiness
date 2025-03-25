import { React  }from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css'

const Home = () =>{
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
      };


    return(
        <div>
        <div className="hometop">
            this is home page
        </div>
        <button className="logoutbutton" onClick={handleLogout}>
            logout
        </button>
        </div>
    );
}

export default Home;