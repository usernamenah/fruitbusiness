import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileCustomer.css";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loadingorder, setLoadingorder] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
  };
  const handleOpen = () => {
    setIsVisible(true);

  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = async () => {
    if (!feedback || feedback.trim() === "") {
      alert("Please enter feedback before submitting.");
      return;
    }

    try {
      const response = await fetch("https://fruitbusinessbackend.vercel.app/user/postfeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ feedback }),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        setFeedback("");
        console.log(result.message);
      } else {
        alert(result.message || "Something went wrong.");
        console.error("Server responded with error:", result);
      }
    } catch (err) {
      console.error("Failed to submit feedback", err);
      alert("Network error. Please try again later.");
    }
  };







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






  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("https://fruitbusinessbackend.vercel.app/api/user_info", {
          withCredentials: true,
        });
        const data = response.data;

        const userData = {
          name: data.name,
          username: data.email.split("@")[0],
          favoriteFruits: ["🍎 Apple", "🍌 Banana", "🍍 Pineapple"],
          bio: "Squeezing the best out of life, one fruit at a time 🍓🍍🍌",
          avatar: data.picture || "https://i.imgur.com/6VBx3io.png",
        };

        setUser(userData);
      } catch (err) {
        setError("Failed to fetch user info");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await axios.get("https://fruitbusinessbackend.vercel.app/order/getpreviousorders", {
          withCredentials: true,
        });
        const data = response.data;

        setOrders(response.data);
        console.log(data);
      } catch (err) {
        console.log("Failed to fetch user orders");
      } finally {
        setLoadingorder(false);
      }
    };

    fetchUserOrders();
  }, []);


  const openeditbox = () => {

  }




  if (loading) return <div>Loading profile...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <div className="main-wrapper">
        {/* DIV1 */}
        <div className="div1">
          <div className="profile-card">
             <button
              className="settings-button"
              onClick={openeditbox()}

              title="Settings"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="settings-icon"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </button>
            <img src={user.avatar} alt="Avatar" className="profile-avatar" />
            <h2 className="profile-name">{user.name}</h2>
            <p className="profile-username">@{user.username}</p>
            <p className="profile-bio">{user.bio}</p>
            <div className="fruit-section">
              <h3 className="fruit-title">Favorite Fruits</h3>
              <div className="fruit-list">
                {user.favoriteFruits.map((fruit, index) => (
                  <div key={index} className="fruit-item">
                    {fruit}
                  </div>
                ))}
              </div>
            </div>
           
            <br></br>
            <br></br>
            <div className="profile-card-previousbooked" role="button" tabIndex={0} onClick={handleOpen}>
              previousbooked
            </div>
          </div>
          <button className="gotobookingsite" onClick={() => navigate("/book")}>
            order now
          </button>
        </div>


        {/* DIV2 */}
        <div className="div2">
          <div className="profile-card" >
            UPDATE IS GONNA COME WHERE YOU CAN POST YOUR EXPERIENCE OF OUR SERVICE AND PRODUCTS

          </div>


        </div>

        {/* DIV3 */}
        <div className="div3">
          <div className="footer">
            <div className="containerfluid">
              <div className="footer-content">
                <div className="delivery">
                  <h3>We Deliver To:</h3>
                  <p> <a href="https://maps.app.goo.gl/yu2swTiDaW7vVWDR9" className="maplinks" target="_blank" rel="noreferrer">Keshav Nagar</a>, <a href="https://maps.app.goo.gl/vWRNFmvE1XGyxZUV8" className="maplinks" target="_blank" rel="noreferrer">Magarpatta</a> , <a href="https://maps.app.goo.gl/s6cVx7MvTDQkpo3h7" className="maplinks" rel="noreferrer" target="_blank">Amanora</a></p>
                </div>
                <div className="contact">
                  <h3>Contact Us</h3>
                  <a href="tel:+919575675775" className="phone-link"> 📞 Phone: 9-575-675-775</a>
                  <div className="icons">
                    {/* WhatsApp */}
                    <a href="https://wa.me/919575675775?text=Hi%2C%20I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" className="icon" title="WhatsApp Us">
                      <svg width="30" height="30" viewBox="0 0 32 32" fill="green">
                        <path d="M16.004 0.003c-8.837 0-16 7.162-16 16 0 2.82 0.736 5.578 2.132 8.008l-2.132 7.989 8.211-2.132c2.377 1.313 5.053 2.005 7.789 2.005 8.837 0 16-7.162 16-16s-7.163-16-16-16zM16 29.001c-2.429 0-4.804-0.662-6.889-1.915l-0.492-0.293-4.872 1.265 1.293-4.757-0.318-0.521c-1.278-2.094-1.954-4.494-1.954-6.779 0-7.168 5.832-13 13-13s13 5.832 13 13-5.832 13-13 13zM22.366 19.36c-0.377-0.188-2.233-1.1-2.58-1.223s-0.598-0.188-0.848 0.188c-0.248 0.377-0.974 1.223-1.2 1.472s-0.447 0.277-0.824 0.094c-0.377-0.188-1.593-0.587-3.035-1.873-1.121-1-1.879-2.232-2.099-2.609s-0.023-0.577 0.164-0.765c0.168-0.167 0.377-0.437 0.565-0.656s0.248-0.376 0.373-0.628c0.124-0.248 0.062-0.469-0.031-0.656s-0.848-2.043-1.162-2.809c-0.305-0.733-0.617-0.635-0.848-0.647-0.219-0.010-0.469-0.012-0.719-0.012s-0.656 0.094-1.002 0.469c-0.343 0.377-1.343 1.312-1.343 3.2s1.373 3.708 1.563 3.964c0.188 0.248 2.706 4.125 6.555 5.789 0.916 0.395 1.629 0.629 2.187 0.805 0.918 0.291 1.751 0.25 2.411 0.152 0.736-0.109 2.233-0.91 2.547-1.786 0.311-0.874 0.311-1.624 0.217-1.786-0.094-0.161-0.342-0.248-0.719-0.437z" />
                      </svg>
                    </a>

                    {/* Email */}
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bloomingbowlfruits@gmail.com&su=Contact%20Request&body=Hi%2C%20I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" className="icon" title="Email Us">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="red">
                        <path d="M12 13.5l-11.5-7.5h23l-11.5 7.5zm0 2.5l-11.5-7.5v12h23v-12l-11.5 7.5z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" className="icon" title="Follow Us on Instagram">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="#E1306C">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07..." />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br></br>

          <div>
            <div className="footer">
              <textarea
                className="feedback-input"
                placeholder="_FEEDBACK_"
                value={feedback}
                onChange={handleFeedbackChange}
              />
              <br />
              <button className="yellow-button" onClick={submitFeedback}>
                Submit
              </button>

            </div>


          </div>
        </div>
      </div>
      <button className="logoutbutton" onClick={handleLogout}>
        logout
      </button>
      <div
        className="previousbooked"
        style={{
          transform: isVisible ? "scale(1)" : "scale(0.03)",
          transition: "transform 0.3s ease-in-out",
          transformOrigin: "top right",
        }}
      >

        <div className="closspreviousbookedtab" title="Close" onClick={handleClose}>
          &times;
        </div>


        <div className="order-history-container">
          <h2>Previous Orders</h2>

          {loadingorder ? (
            <div>Loading orders...</div>
          ) : orders.length === 0 ? (
            <div>No orders found.</div>
          ) : (
            <div className="order-scroll">
              {orders.map((order, index) => (
                <div className="order-card" key={order._id || index}>

                  <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}</p>

                  {order.bowl.length > 0 && (
                    <p><strong>Bowl:</strong> {order.bowl.join(", ")}</p>
                  )}
                  {order.juices.length > 0 && (
                    <p><strong>Juices:</strong> {order.juices.join(", ")}</p>
                  )}
                  {order.coldPressed.length > 0 && (
                    <p><strong>Cold Pressed:</strong> {order.coldPressed.join(", ")}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>


      </div>

      <button className="homebutton" onClick={() => navigate("/home")}>
        Home
      </button>



    </>
  );
};

export default UserProfile;
