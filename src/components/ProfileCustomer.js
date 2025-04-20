// UserProfile.js

import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { FaAppleAlt, FaBanana, FaUser } from "react-icons/fa";
// import { PiPineappleFill } from "react-icons/pi";


const UserProfile = () => {
  const user = {
    name: "Fruit Lover",
    username: "juicy_bites",
    favoriteFruits: ["Apple", "Banana", "Pineapple"],
    bio: "Squeezing the best out of life, one fruit at a time 🍓🍍🍌",
    avatar: "https://i.imgur.com/6VBx3io.png", // Example avatar
  };

  const fruitIcons = {
    // Apple: <FaAppleAlt className="text-red-400 text-xl" />,
    // Banana: <FaBanana className="text-yellow-300 text-xl" />,
    // Pineapple: <PiPineappleFill className="text-yellow-500 text-xl" />,
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white flex justify-center items-center p-6">
      {/* <Card className="bg-[#1f1f1f] border-none shadow-2xl rounded-2xl w-full max-w-md">
        <CardContent className="p-6">
          <div className="flex flex-col items-center space-y-4">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-pink-400"
            />
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-400">@{user.username}</p>
            <p className="text-center text-base mt-2">{user.bio}</p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              {user.favoriteFruits.map((fruit) => (
                <div
                  key={fruit}
                  className="bg-[#2a2a2a] p-3 rounded-xl flex items-center gap-2 shadow-inner"
                >
                  {fruitIcons[fruit] || <FaUser />}
                  <span className="text-sm">{fruit}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default UserProfile;
