import React, { useState } from 'react';
import './Booking.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { marked } from 'marked';

const Booking = () => {
    const navigate = useNavigate();



    const [selectedbowl, setSelectedbowl] = useState([]);
    const [selectedJuices, setSelectedJuices] = useState([]);
    const [selectedColdPressed, setSelectedColdPressed] = useState([]);
    const [activeTab, setActiveTab] = useState(0);
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [ailoading, setaiLoading] = useState(false);
   
    const [showChat, setShowChat] = useState(false);
    
    // const [problem, setProblem] = useState("");
    // const [recommendations, setRecommendations] = useState([]);
    // const [isVisible, setIsVisible] = useState(false);


    const fruitbowl = ['Normal', 'Medium', 'Premium'];
    const specialitems = ['sweet', 'putharekulu ( 250gm )', 'putharekulu ( 500gm )'];
    const specialpack = ['sweet', 'putharekulu ( 250gm )', 'putharekulu ( 500gm )'];
    const specialvillagefood = ['sweet', 'putharekulu ( 250gm )', 'putharekulu ( 500gm )'];
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
            const response = await fetch("https://fruitbusinessbackend.vercel.app/order/place", {
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


    // i used to implememnt gemini ai but it sucked 
    // so i implemented another way 
    // const handleRecommend = async () => {
    //     // setLoading(true);
    //     try {
    //         const res = await fetch("https://fruitbusinessbackend.vercel.app/aipath/recommend", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ problem, juiceList }),
    //         });
    //         const data = await res.json();
    //         setRecommendations(data.recommendations || ["sorry no money to buy AI services" , "so no recommendation 😢😭"]);
    //     } catch (err) {
    //         console.error("Error:", err);
    //     } finally {
    //         setaiLoading(false);
    //     }
    // };

    const fetchGeminiResponse = async (prompt) => {
        setaiLoading(true);
        try {

            const res = await axios.post("https://fruitbusinessbackend.vercel.app/aipath/recommend", {
                prompt,
            });

            // Extract actual string
            const text = res.data.response;

            // Convert markdown to HTML
            const html = marked(text);

            setResponse(html);
        } catch (error) {
            console.error("Error fetching response:", error);
            setResponse("Error occurred while fetching response.");
        } finally {
            setaiLoading(false);
        }
    };



    const getCount = (array, item) => array.filter(f => f === item).length;

    return (
        <>
            <div className='container-fluid'>
                {/* <div className='row'>
                    <div className='rerecomend'>

                       <div className="rerecommendations fixed top-20 left-0 w-screen h-[150px] bg-gray-900 text-white rounded-none shadow-lg z-50 px-4 sm:px-6 md:px-8">
  <h3 className="text-xl font-bold mb-2">Recommendations</h3>
  <p className="text-sm">This is where the recommendations would go.</p>
</div>

                    </div>

                </div> */}
                <div className='row'>
                    <div className='col-9'>
                        <div className='totheleft'>
                            <div className="w-full max-w-4xl mx-auto mt-10 bg-[#1e1e1e] text-white rounded-lg overflow-hidden shadow-lg">
                                {/* Tabs */}
                                <div className="relative flex">
                                    {['ORIGINALS', 'SPECIALS'].map((label, index) => (
                                        <button
                                            key={label}
                                            className={`flex-1 py-4 text-center transition-colors duration-300 z-10 ${activeTab === index ? 'text-white' : 'text-gray-400'
                                                }`}
                                            onClick={() => setActiveTab(index)}
                                        >
                                            {label}
                                        </button>
                                    ))}

                                    {/* Highlight Bar */}
                                    <div
                                        className="absolute bottom-0 h-1 bg-blue-400 transition-all duration-300"
                                        style={{ left: `${activeTab * 50}%`, width: '50%' }}
                                    />
                                </div>

                                {/* Tab Content */}
                                <div className=" bg-[#2c2c2c]  min-h-[200px]">
                                    {activeTab === 0 ? (
                                        <div>
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



                                        </div>
                                    ) : (
                                        <div>
                                            <div className="booking-container">
                                                <div className="booking-card">
                                                    <h1 className="booking-title">🍊🍉🍅🍌🥝 Book Your SPEACIAL Healthy Treat 🥤🧃</h1>
                                                    <h1 className="booking-title">we will update the items too</h1>

                                                    {/* Fruit Bowl */}
                                                    <div className="mb-8">
                                                        <h2 className="section-title">SPECIAL ITEMS  </h2><br />
                                                        <div className="button-group">
                                                            {specialitems.map((bowl) => {
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
                                                        <h2 className="section-title"> SPECIAL PACKS </h2><br />
                                                        <div className="button-group">
                                                            {specialpack.map((fruit) => {
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
                                                        <h2 className="section-title">SPECIAL VILLAGE FOOD </h2><br />
                                                        <div className="button-group">
                                                            {specialvillagefood.map((fruit) => {
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



                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        {/* <div className='recomend'>

                            <div className="recommendations  top-20 right-5 bg-gray-900 text-white  rounded-lg shadow-lg z-50 w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]">
                             
                                <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded text-black">
                                    <h2 className="text-xl font-semibold mb-2">AI Juice Recommender</h2>
                                    <input
                                        type="text"
                                        placeholder="Describe your issue (e.g. feeling tired)"
                                        value={problem}
                                        onChange={(e) => setProblem(e.target.value)}
                                        className="w-full p-2 border rounded mb-2"
                                    />
                                    <button
                                        onClick={handleRecommend}
                                        className="bg-blue-600 text-white px-4 py-2 rounded"
                                        disabled={ailoading}
                                    >
                                        {ailoading ? "Thinking..." : "Get Recommendation"}
                                    </button>

                                    {recommendations.length > 0 && (
                                        <div className="mt-4">
                                            <h3 className="font-bold">Results : </h3>
                                            <ul className="list-disc pl-5 text-xl">
                                                {recommendations.map((juice, index) => (
                                                    <li key={index}>{juice}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div> */}

                        <button className="openaibox" onClick={() => setShowChat(true)}>
                            Chat with AI
                        </button>

                        <div className={`changeaiplace ${showChat ? 'show' : ''}`}>
                            <button className="closebtn" onClick={() => setShowChat(false)}>×</button>

                            <div className="chatbox-wrapper">
                                <div className="chatbox">
                                    <div className="input-row">
                                        <input
                                            value={prompt}
                                            onChange={(e) => setPrompt(e.target.value)}
                                            placeholder="ask anything (juices or your wish)"
                                        />
                                        <button onClick={() => fetchGeminiResponse(prompt)}>click</button>
                                    </div>

                                    {ailoading ? (
                                        <p className="loading">Loading response...</p>
                                    ) : (
                                        response && (
                                            <div className="response-box">
                                                <h2>AI Response:</h2>
                                                <div
                                                    className="formatted-response"
                                                    dangerouslySetInnerHTML={{ __html: response }}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                                </div>
                        </div>





                    </div>

                </div>

            </div >
            <button className="homebutton" onClick={() => navigate("/home")}>
                Home
            </button>

            <button className="booktoprofilebutton" onClick={() => navigate("/profilecustomer")}>
                profile
            </button>




        </>
    );
};

export default Booking;
