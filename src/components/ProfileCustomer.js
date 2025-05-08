import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileCustomer.css";
import { useNavigate } from "react-router-dom";


const UserProfile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const submitFeedback = async () => {
    alert(feedback);
    try {
      const response = await fetch("http://localhost:5000/user/postfeedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ feedback }),
      });
  
      const result = await response.json();
      console.log(result.message);
    } catch (err) {
      console.error("Failed to submit feedback", err);
    }
  };





  const handleLogout = async () => {
    try {
      // Call backend logout endpoint
      const response = await fetch("http://localhost:5000/logout", {
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
        const response = await axios.get("http://localhost:5000/api/user_info", {
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

  if (loading) return <div>Loading profile...</div>;
  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <>
      <div className="main-wrapper">
        {/* DIV1 */}
        <div className="div1">
          <div className="profile-card">
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
          </div>
        </div>

        {/* DIV2 */}
        <div className="div2">
          {/* You can add your own content/code here */}
        </div>

        {/* DIV3 */}
        <div className="div3">
          <div className="footer">
            <div className="containerfluid">
              <div className="footer-content">
                <div className="delivery">
                  <h3>We Deliver To:</h3>
                  <p>Keshav Nagar , Magarpatta , Amanora</p>
                </div>
                <div className="contact">
                  <h3>Contact Us</h3>
                  <p>Phone: 9-575-675-775</p>
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
    </>
  );
};

export default UserProfile;
