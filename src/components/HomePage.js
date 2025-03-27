import { React } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import fruitsmainimage from "./images/allfruitsforweb.jpg";
import fruitsmainimage1 from "./images/image2.jpg";
import fruitsmainimage2 from "./images/image3.jpg";
// import widesmainimage from "./images/slicesshort.jpg";
import './HomePage.css'


const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        Cookies.remove("authToken"); 
        navigate("/login"); 
    };


    return (
        <>
            <div className="containerfluid">
                <div className="row">


                    <div className="col-12">
                        <header className="display-2">
                           
                            <br></br>
                            <br></br>
                            <b>
                                <div className="imagetext">
                                    BLOOMING BOWL
                                </div></b> </header>

                    </div>

                </div>
            </div>
            <br></br>
            <br></br>

            <div className="intro">
                <p className="intropara">
                Welcome to <i><b>BLOOMING BOWL!</b> </i>  🍎🍊🥤
                </p>
                <p className="intropara">
                 We bring you the freshest fruits, delicious juices, and beautifully curated fruit boxes. 
                </p>
                <p className="intropara">
                Our mission is to deliver natural goodness, packed with nutrition and flavor, straight to your doorstep. Explore our selection and enjoy the taste of freshness!
                </p>

                <p className="intropara"><i>
                Explore our selection and enjoy the taste of freshness!</i>
                </p>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <div className="containerfluid">
                <div className="row">
                    <div className="col-2">

                    </div>
                    <div className="col-3">
                        <div className="upaniforimg">
                            <div className="containerfluid">
                                <div className="row">

                                    <img src={fruitsmainimage1} alt="ffruitsimage" className="image1"></img>
                                </div>
                            </div>
                            <p className="downlabel">FRUIT BOWL</p>

                        </div>

                    </div>
                    <div className="col-3">
                        <div className="upaniforimg">
                            <div className="containerfluid">
                                <div className="row">
                                    <img src={fruitsmainimage} alt="ffruitsimage" className="image2"></img>
                                </div>
                            </div>
                            <p className="downlabel">FRUITS</p>

                        </div>

                    </div>
                    <div className="col-3">
                        <div className="upaniforimg">
                            <div className="containerfluid">
                                <div className="row">

                                    <img src={fruitsmainimage2} alt="ffruitsimage" className="image3"></img>
                                </div>
                            </div>
                            <p className="downlabel">COLD PRESSED JUICES</p>

                        </div>

                    </div>


                </div>

            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
                <path d="M13.902.334a.5.5 0 0 1-.28.65l-2.254.902-.4 1.927c.376.095.715.215.972.367.228.135.56.396.56.82q0 .069-.011.132l-.962 9.068a1.28 1.28 0 0 1-.524.93c-.488.34-1.494.87-3.01.87s-2.522-.53-3.01-.87a1.28 1.28 0 0 1-.524-.93L3.51 5.132A1 1 0 0 1 3.5 5c0-.424.332-.685.56-.82.262-.154.607-.276.99-.372C5.824 3.614 6.867 3.5 8 3.5c.712 0 1.389.045 1.985.127l.464-2.215a.5.5 0 0 1 .303-.356l2.5-1a.5.5 0 0 1 .65.278M9.768 4.607A14 14 0 0 0 8 4.5c-1.076 0-2.033.11-2.707.278A3.3 3.3 0 0 0 4.645 5c.146.073.362.15.648.222C5.967 5.39 6.924 5.5 8 5.5c.571 0 1.109-.03 1.588-.085zm.292 1.756C9.445 6.45 8.742 6.5 8 6.5c-1.133 0-2.176-.114-2.95-.308a6 6 0 0 1-.435-.127l.838 8.03c.013.121.06.186.102.215.357.249 1.168.69 2.438.69s2.081-.441 2.438-.69c.042-.029.09-.094.102-.215l.852-8.03a6 6 0 0 1-.435.127 9 9 0 0 1-.89.17zM4.467 4.884s.003.002.005.006zm7.066 0-.005.006zM11.354 5a3 3 0 0 0-.604-.21l-.099.445.055-.013c.286-.072.502-.149.648-.222" />
            </svg>


            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5zm13-3H1v2h14zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket-fill" viewBox="0 0 16 16">
                <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z" />
            </svg>


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