import React, { useState } from 'react';
import './Booking.css';
import { FaAppleAlt, FaLemon, FaSeedling } from 'react-icons/fa';

const Booking = () => {
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

    const handleSubmit = () => {
        const formatList = (list) => {
            const countMap = {};
            list.forEach(item => {
                countMap[item] = (countMap[item] || 0) + 1;
            });
            return Object.entries(countMap).map(([item, count]) => `${item} (${count})`).join(', ');
        };

        alert(`🍓 Order Placed! 🍊\n\n🥣 Fruit Bowl: ${formatList(selectedbowl) || 'None'}\n🧃 Juices: ${formatList(selectedJuices) || 'None'}\n❄️ Cold Pressed Juices: ${formatList(selectedColdPressed) || 'None'}`);

        logBowlData(selectedbowl);
        logBowlData(selectedJuices);
        logBowlData(selectedColdPressed);
    };

    const logBowlData = (selected) => {
        const countMap = {};
        selected.forEach(item => {
            countMap[item] = (countMap[item] || 0) + 1;
        });
        console.log('Selected Summary:');
        for (const [key, value] of Object.entries(countMap)) {
            console.log(`${key} -> ${value}`);
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
        </div>
    );
};

export default Booking;
