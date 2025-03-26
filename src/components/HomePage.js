import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import './HomePage.css'


const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };


    return (
        <>
            <div className="containerfluid">
                <div className="row">
                    <div className="col-4">
                        <header className="display-1">
                            <b>
                            <div className="ttt">
                                BLOOMIN
                            </div></b> </header>

                    </div>
                    <div className="col-4">

                    </div>
                    <div className="col-4">
                    <header className="display-1">
                        <b>
                            <div className="ttt">
                                BOWL
                            </div></b> </header>

                    </div>
                </div>

            </div>
            <div className="">
                this is home page
            </div>


            <button className="logoutbutton" onClick={handleLogout}>
                logout
            </button>
        </>
    );
}

export default Home;