import React, { useEffect, useState } from "react";
import { FaMedal } from "react-icons/fa";

// Customize appearance based on rank
const rankColors = [
  "from-gray-300 via-gray-200 to-gray-400",   // 🥇 1st place - bright gold gradient
   "from-yellow-400 via-yellow-300 to-yellow-500",         // 🥈 2nd place - silver gradient
  "from-orange-400 via-amber-500 to-yellow-600",  
  , // 🥉 3rd place - bronze gradient
];

const medalColors = ["text-yellow-400", "text-gray-400", "text-orange-400"];
const cardWidths = ["w-[170px]", "w-[190px]", "w-[170px]"];

const TOPCards = ({ users }) => {
  const [newOrder, setNewOrder] = useState([]);

  useEffect(() => {
    if (users && users.length === 3) {
      // Reorder users to display 2nd, 1st, then 3rd for podium style
      const ordered = [users[1], users[0], users[2]];
      ordered[0].id = 1; // 2nd place
      ordered[1].id = 0; // 1st place
      ordered[2].id = 2; // 3rd place
      setNewOrder(ordered);
    }
  }, [users]);

  if (!newOrder.length) return null;

  return (
    <div className="flex justify-center items-end gap-8 my-10 flex-wrap">
      {newOrder.map((user, i) => (
        <div
          key={user._id}
          className={`
            ${cardWidths[i]} 
            p-6 rounded-3xl text-black shadow-2xl backdrop-blur-md
            bg-gradient-to-br ${rankColors[i]} 
            flex flex-col items-center
            transform transition-transform duration-300 hover:scale-105 focus-within:scale-105
            cursor-pointer select-none
          `}
          style={{
            minWidth: "160px",
            boxShadow:
              "0 8px 25px rgba(0,0,0,0.25), inset 0 0 12px rgba(255,255,255,0.25)",
          }}
          tabIndex={0} // For keyboard focus
          aria-label={`Rank ${user.id + 1} - ${user.name} with ${user.points} points`}
        >
          <div
            className={`w-20 h-20 rounded-full bg-white bg-opacity-30 mb-4 flex items-center justify-center shadow-inner ${medalColors[i]}`}
          >
            <FaMedal size={32} />
          </div>
          <h3 className="font-semibold text-lg text-center truncate">{user.name}</h3>
          <p className="text-base font-mono mt-2 tracking-wide">{user.points} pts</p>
          <span className="mt-3 text-sm font-bold px-4 py-1 bg-blue-300 bg-opacity-25 rounded-full">
            #{user.id + 1}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TOPCards;
