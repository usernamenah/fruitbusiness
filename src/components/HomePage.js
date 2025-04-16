import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import fruitsmainimage from "./images/allfruitsforweb.jpg";
import fruitsmainimage1 from "./images/image2.jpg";
import fruitsmainimage2 from "./images/image3.jpg";
// import Booking from "./Boooking";
// import Cookies from "js-cookie";
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
// import widesmainimage from "./images/slicesshort.jpg";
import './HomePage.css'
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { auth } from "../firebase/firebasephone";


const Home = () => {
    const navigate = useNavigate();

    const [hovered0, setHovered0] = useState(false);
    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);



    const handleLogout = async () => {
        try {
            // Call backend logout endpoint
            const response = await fetch("https://fruitbusinessbackend.vercel.app/logout", {
                method: "POST",
                credentials: "include" // Necessary for cookie clearing
            });

            if (response.ok) {
                // Client-side cleanup and redirect
                navigate("/login");
                window.location.reload(); // Ensure auth state is cleared
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };



    return (
        <>
            <div className="containerfluid">
                <div className="row" style={{ padding: '-40rem' }}>

                    <div className="col-12">
                        <header className="display-2">

                            <br></br>

                            <b>
                                <div className="imagetext">
                                    <span className="blink">
                                        BLOOMING </span> <span className="blink2"> BOWL</span>


                                </div></b> </header>

                    </div>

                </div>
            </div>
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



            <div className="fruits">
            </div>
            <div className="menuin">

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-6 col-md-3 text-center">
                            <div
                                style={{
                                    cursor: 'pointer',
                                    transform: hovered0 ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.3s ease-in-out',
                                    display: 'inline-block',
                                    padding: '25px',
                                    backgroundColor: '#d1f0ff',
                                    borderRadius: '8px',
                                }}
                                onMouseEnter={() => setHovered0(true)}
                                onMouseLeave={() => setHovered0(false)}
                                onClick={() => navigate("/book")}
                            >
                                <div className="upaniforimg" >
                                    <img src={fruitsmainimage1} alt="Fruit Bowl" className="image1" />
                                    <p className="downlabel">FRUIT BOWL</p>
                                </div>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="col-6 col-md-3 text-center">
                            <div
                                style={{
                                    cursor: 'pointer',
                                    transform: hovered1 ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.3s ease-in-out',
                                    display: 'inline-block',
                                    padding: '25px',
                                    backgroundColor: 'rgb(255, 218, 170)',
                                    borderRadius: '8px',
                                }}
                                onMouseEnter={() => setHovered1(true)}
                                onMouseLeave={() => setHovered1(false)}
                                onClick={() => navigate("/book")}

                            >
                                <div className="upaniforimg">
                                    <img src={fruitsmainimage} alt="Fruits" className="image2" />
                                    <p className="downlabel">JUICES</p>
                                </div>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="col-6 col-md-3 text-center">
                            <div
                                style={{
                                    cursor: 'pointer',
                                    transform: hovered2 ? 'scale(1.1)' : 'scale(1)',
                                    transition: 'transform 0.3s ease-in-out',
                                    display: 'inline-block',
                                    padding: '25px',
                                    backgroundColor: 'rgb(244, 244, 155)',
                                    borderRadius: '8px',
                                }}
                                onMouseEnter={() => setHovered2(true)}
                                onMouseLeave={() => setHovered2(false)}
                                onClick={() => navigate("/book")}

                            >
                                <div className="upaniforimg" >
                                    <img src={fruitsmainimage2} alt="Cold Pressed Juices" className="image3" />
                                    <p className="downlabel">COLD PRESSED JUICES</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div >
            <div>

                {/* 👇 This is the hoverable section */}



                <div
                    style={{
                        opacity: hovered0 ? 1 : 0,
                        visibility: hovered0 ? 'visible' : 'hidden',
                        transition: 'opacity 0s ease-in-out, visibility 0.3s ease-in-out',
                        color: 'green',
                    }}
                >
                    <div className="fruitbowl0">
                        <br></br>
                        <br></br>

                        <center>


                            <div className="fb1">
                                Normal fruit bowl
                            </div>
                            <br></br>
                            <br></br>

                            <div className="fb1">
                                Medium fruit bowl
                            </div>
                            <br></br>
                            <br></br>

                            <div className="fb1">
                                Premium fruit bowl
                            </div>
                        </center>


                    </div>
                </div>
                <div
                    style={{
                        opacity: hovered1 ? 1 : 0,
                        visibility: hovered1 ? 'visible' : 'hidden',
                        transition: 'opacity 0s ease-in-out, visibility 0.3s ease-in-out',
                        color: 'green',
                    }}
                >
                    <div className="fruitbowl11">
                        <br />
                        <div className="fb2">
                            Apple Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Orange Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Mango Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Pineapple Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Watermelon Juice
                        </div>

                       
                    </div>

                    <div className="fruitbowl12">
                        <br></br>
                        <div className="fb2">
                            Grape Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Pomegranate Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Kiwi Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Papaya Juice
                        </div>
                        <br />

                        <div className="fb2">
                            Mixed Fruit Juice
                        </div>

                       

                    </div>
                </div>
                <div
                    style={{
                        opacity: hovered2 ? 1 : 0,
                        visibility: hovered2 ? 'visible' : 'hidden',
                        transition: 'opacity 0s ease-in-out, visibility 0.3s ease-in-out',
                        color: 'green',
                    }}
                >
                    <div className="fruitbowl2">
                        <br></br>
                        <br></br>
                        <b>
                            <div className="fb3">
                                ABC Juice
                            </div></b>
                        <br></br>

                        <b>
                            <div className="fb3">
                                Clelery Juice
                            </div></b>
                        <br></br>

                        <b>
                            <div className="fb3">
                                Spinach Juice
                            </div></b>
                        <br></br>

                        <b>
                            <div className="fb3">
                                Pineapple & turmeric juice
                            </div></b>
                    </div>
                </div>
                {/* <div
                    style={{
                        opacity: hovered1 ? 1 : 0,
                        visibility: hovered1 ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                        color: 'green',
                    }}
                >
                    🍓 Fruit bowl appears!
                </div>
                <div
                    style={{
                        opacity: hovered2 ? 1 : 0,
                        visibility: hovered2 ? 'visible' : 'hidden',
                        transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out',
                        color: 'green',
                    }}
                >
                    🍓 Fruit bowl appears!
                </div> */}





                {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cup-straw" viewBox="0 0 16 16">
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
                </div> */}
                <br></br>
                <br></br>
                <br></br>
                <div className="footer">
                    <div className="containerfluid">
                        <div className="footer-content">
                            <div className="delivery">
                                <h3>We Deliver To:</h3>
                                <p>Keshav Nagar , Magarpatta ,  Amanora</p>
                            </div>

                            <div className="contact">
                                <h3>Contact Us</h3>
                                <p>Phone: 9-575-675-775</p>
                                <div className="icons">
                                    {/* WhatsApp */}
                                    <a
                                        href="https://wa.me/919575675775?text=Hi%2C%20I%20want%20to%20contact%20you"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon"
                                        title="WhatsApp Us"
                                    >
                                        <svg width="30" height="30" viewBox="0 0 32 32" fill="green">
                                            <path d="M16.004 0.003c-8.837 0-16 7.162-16 16 0 2.82 0.736 5.578 2.132 8.008l-2.132 7.989 8.211-2.132c2.377 1.313 5.053 2.005 7.789 2.005 8.837 0 16-7.162 16-16s-7.163-16-16-16zM16 29.001c-2.429 0-4.804-0.662-6.889-1.915l-0.492-0.293-4.872 1.265 1.293-4.757-0.318-0.521c-1.278-2.094-1.954-4.494-1.954-6.779 0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zM22.366 19.36c-0.377-0.188-2.233-1.1-2.58-1.223s-0.598-0.188-0.848 0.188c-0.248 0.377-0.974 1.223-1.2 1.472s-0.447 0.277-0.824 0.094c-0.377-0.188-1.593-0.587-3.035-1.873-1.121-1-1.879-2.232-2.099-2.609s-0.023-0.577 0.164-0.765c0.168-0.167 0.377-0.437 0.565-0.656s0.248-0.376 0.373-0.628c0.124-0.248 0.062-0.469-0.031-0.656s-0.848-2.043-1.162-2.809c-0.305-0.733-0.617-0.635-0.848-0.647-0.219-0.010-0.469-0.012-0.719-0.012s-0.656 0.094-1.002 0.469c-0.343 0.377-1.343 1.312-1.343 3.2s1.373 3.708 1.563 3.964c0.188 0.248 2.706 4.125 6.555 5.789 0.916 0.395 1.629 0.629 2.187 0.805 0.918 0.291 1.751 0.25 2.411 0.152 0.736-0.109 2.233-0.91 2.547-1.786 0.311-0.874 0.311-1.624 0.217-1.786-0.094-0.161-0.342-0.248-0.719-0.437z" />
                                        </svg>
                                    </a>

                                    {/* Email */}
                                    <a
                                        href="https://mail.google.com/mail/?view=cm&fs=1&to=bloomingbowlfruits@gmail.com&su=Contact%20Request&body=Hi%2C%20I%20want%20to%20contact%20you"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon"
                                        title="Email Us"
                                    >
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="red">
                                            <path d="M12 13.5l-11.5-7.5h23l-11.5 7.5zm0 2.5l-11.5-7.5v12h23v-12l-11.5 7.5z" />
                                        </svg>
                                    </a>

                                    {/* Instagram */}
                                    <a
                                        href="https://instagram.com/yourpage"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="icon"
                                        title="Follow Us on Instagram"
                                    >
                                        <svg width="30" height="30" viewBox="0 0 24 24" fill="#E1306C">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.33 3.608 1.304.975.975 1.242 2.242 1.304 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.33 2.633-1.304 3.608-.975.975-2.242 1.242-3.608 1.304-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.33-3.608-1.304-.975-.975-1.242-2.242-1.304-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.33-2.633 1.304-3.608.975-.975 2.242-1.242 3.608-1.304 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.674.077-3.162.518-4.35 1.706s-1.629 2.676-1.706 4.35c-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.077 1.674.518 3.162 1.706 4.35s2.676 1.629 4.35 1.706c1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.674-.077 3.162-.518 4.35-1.706s1.629-2.676 1.706-4.35c.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.077-1.674-.518-3.162-1.706-4.35s-2.676-1.629-4.35-1.706c-1.28-.058-1.688-.07-4.947-.07zM12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <button className="logoutbutton" onClick={handleLogout}>
                    logout
                </button>
            </div>
        </>
    );
}



export default Home;
