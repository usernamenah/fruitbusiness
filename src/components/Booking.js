
import React, { useState } from 'react';

const Booking = () => {
    const [selectedFruitBowl, setSelectedFruitBowl] = useState('');
    const [selectedJuices, setSelectedJuices] = useState([]);
    const [selectedColdPressed, setSelectedColdPressed] = useState([]);

    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes', 'Watermelon'];

    const handleJuiceSelect = (fruit) => {
        setSelectedJuices((prev) => {
            if (prev.includes(fruit)) {
                return prev.filter(f => f !== fruit);
            } else if (prev.length < 5) {
                return [...prev, fruit];
            } else {
                return prev;
            }
        });
    };

    const handleColdPressedSelect = (fruit) => {
        setSelectedColdPressed((prev) => {
            if (prev.includes(fruit)) {
                return prev.filter(f => f !== fruit);
            } else if (prev.length < 3) {
                return [...prev, fruit];
            } else {
                return prev;
            }
        });
    };

    const handleSubmit = () => {
        alert(`Order Placed!\nFruit Bowl: ${selectedFruitBowl}\nJuices: ${selectedJuices.join(', ')}\nCold Pressed Juices: ${selectedColdPressed.join(', ')}`);
    };

    return (
        <div className="min-h-screen p-6" style={{ backgroundColor: '#E0F7FA' }}>
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl border border-yellow-300">
                <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center">Book Your Healthy Treat</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">Fruit Bowls</h2>
                    <div className="flex gap-4">
                        {['Normal', 'Medium', 'Premium'].map((type) => (
                            <button
                                key={type}
                                className={`px-4 py-2 rounded-full border ${selectedFruitBowl === type ? 'bg-orange-400 text-white' : 'bg-blue-100 text-black'}`}
                                onClick={() => setSelectedFruitBowl(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">Juices (Choose up to 5 fruits)</h2>
                    <div className="flex flex-wrap gap-3">
                        {fruits.map((fruit) => (
                            <button
                                key={fruit}
                                className={`px-4 py-2 rounded-full border ${selectedJuices.includes(fruit) ? 'bg-orange-400 text-white' : 'bg-blue-100 text-black'}`}
                                onClick={() => handleJuiceSelect(fruit)}
                            >
                                {fruit}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-yellow-600 mb-2">Cold Pressed Juices (Choose up to 3 fruits)</h2>
                    <div className="flex flex-wrap gap-3">
                        {fruits.map((fruit) => (
                            <button
                                key={fruit + '_cold'}
                                className={`px-4 py-2 rounded-full border ${selectedColdPressed.includes(fruit) ? 'bg-orange-400 text-white' : 'bg-blue-100 text-black'}`}
                                onClick={() => handleColdPressedSelect(fruit)}
                            >
                                {fruit}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="bg-yellow-400 text-white px-6 py-2 rounded-full hover:bg-yellow-500"
                        onClick={handleSubmit}
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Booking;