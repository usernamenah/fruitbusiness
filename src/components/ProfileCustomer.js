import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProfileCustomer.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);       // holds the user data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState("");        // error state

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const response = await axios.get("https://fruitbusinessbackend.vercel.app/api/user_info", {
          withCredentials: true
        });
        const data = response.data;

        // Create a similar structure to what your component expects
        const userData = {
          name: data.name,
          username: data.email.split("@")[0], // fallback username from email
          favoriteFruits: ["🍎 Apple", "🍌 Banana", "🍍 Pineapple"], // can be customized
          bio: "Squeezing the best out of life, one fruit at a time 🍓🍍🍌",
          avatar: data.picture || "https://i.imgur.com/6VBx3io.png"
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
    <div className="profile-container">
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
  );
};

export default UserProfile;
