import React, { useState } from 'react';
import './Booking.css';
import { useNavigate } from "react-router-dom";

const Booking = () => {
    const navigate = useNavigate();

    const [selectedbowl, setSelectedbowl] = useState([]);
    const [selectedJuices, setSelectedJuices] = useState([]);
    const [selectedColdPressed, setSelectedColdPressed] = useState([]);

    const fruitbowl = ['Normal', 'Medium', 'Premium'];
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon'];
    const coldfruits = ['ABC Juice', 'Celery Juice', 'Spinach Juice', 'Pineapple & Turmeric Juice'];

    // Add handlers
    const handleAdd = (item, setter, currentList) => {
        if (currentList.length < 100) {
            setter(prev => [...prev, item]);
        }
    };

    const handleRemove = (item, setter, currentList) => {
        const index = currentList.indexOf(item);
        if (index !== -1) {
            const newList = [...currentList];
            newList.splice(index, 1);
            setter(newList);
        }
    };

    const handleSubmit = async () => {
        const formatList = (list) => {
            const countMap = {};
            list.forEach(item => {
                countMap[item] = (countMap[item] || 0) + 1;
            });
            return Object.entries(countMap).map(([item, count]) => `${item} (${count})`).join(', ');
        };

        
        try {
            const response = await fetch("http://localhost:5000/order/place", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    bowl: selectedbowl,
                juices: selectedJuices,
                coldPressed: selectedColdPressed
            }),
            credentials: "include" 
        });
        
        const data = await response.json();
            console.log(data.message);
        } catch (error) {
            console.error("Error submitting order:", error);
        }
        alert(`🍓 Order Placed! 🍊\n\n🥣 Fruit Bowl: ${formatList(selectedbowl) || 'None'}\n🧃 Juices: ${formatList(selectedJuices) || 'None'}\n❄️ Cold Pressed Juices: ${formatList(selectedColdPressed) || 'None'}`);
        navigate("/profilecustomer");
          
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

   

    const getCount = (array, item) => array.filter(f => f === item).length;

    return (
        <div className="booking-container">
            <div className="booking-card">
                <h1 className="booking-title">🍊🍉🍅🍌🥝 Book Your Healthy Treat 🥤🧃</h1>

                {/* Fruit Bowl */}
                <div className="mb-8">
                    <h2 className="section-title">🍉 Fruit Bowl </h2><br />
                    <div className="button-group">
                        {fruitbowl.map((bowl) => {
                            const count = getCount(selectedbowl, bowl);
                            return (
                                <div key={bowl} className="option-container">
                                    <button
                                        className={`option-button ${count > 0 ? 'selected' : ''}`}
                                        onClick={() => handleAdd(bowl, setSelectedbowl, selectedbowl)}
                                    >
                                        🥣 {bowl} {count > 0 && `(${count})`}
                                    </button>
                                    {count > 0 && (
                                        <button
                                            className="minus-button"
                                            onClick={() => handleRemove(bowl, setSelectedbowl, selectedbowl)}
                                        >
                                            ➖
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Juices */}
                <div className="mb-8">
                    <h2 className="section-title">🥤 Juices </h2><br />
                    <div className="button-group">
                        {fruits.map((fruit) => {
                            const count = getCount(selectedJuices, fruit);
                            return (
                                <div key={fruit} className="option-container">
                                    <button
                                        className={`option-button ${count > 0 ? 'selected' : ''}`}
                                        onClick={() => handleAdd(fruit, setSelectedJuices, selectedJuices)}
                                    >
                                        🧃 {fruit} {count > 0 && `(${count})`}
                                    </button>
                                    {count > 0 && (
                                        <button
                                            className="minus-button"
                                            onClick={() => handleRemove(fruit, setSelectedJuices, selectedJuices)}
                                        >
                                            ➖
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Cold Pressed Juices */}
                <div className="mb-8">
                    <h2 className="section-title">🧃 Cold Pressed Juices </h2><br />
                    <div className="button-group">
                        {coldfruits.map((fruit) => {
                            const count = getCount(selectedColdPressed, fruit);
                            return (
                                <div key={fruit} className="option-container">
                                    <button
                                        className={`option-button ${count > 0 ? 'selected' : ''}`}
                                        onClick={() => handleAdd(fruit, setSelectedColdPressed, selectedColdPressed)}
                                    >
                                        ❄️ {fruit} {count > 0 && `(${count})`}
                                    </button>
                                    {count > 0 && (
                                        <button
                                            className="minus-button "
                                            onClick={() => handleRemove(fruit, setSelectedColdPressed, selectedColdPressed)}
                                        >
                                            ➖
                                        </button>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="text-center mt-10">
                    <button className="submit-button" onClick={handleSubmit}>
                        ✅ Place Order
                    </button>
                </div>
            </div>
            <button className="logoutbutton" onClick={handleLogout}>
                    logout
                </button>
        </div>
    );
};

export default Booking;
