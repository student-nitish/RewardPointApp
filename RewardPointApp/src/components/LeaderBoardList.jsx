import React from "react";

const getInitials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

const LeaderboardList = ({ users = [] }) => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      {users.map((user, idx) => (
        <div
          key={user._id}
          className="flex items-center justify-between w-full max-w-2xl px-6 py-4 rounded-full bg-white/80 shadow-md border border-gray-200 hover:shadow-lg transition duration-300"
        >
          {/* Rank Bubble */}
          <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center rounded-full font-bold shadow-md">
            {idx + 4}
          </div>

          {/* Avatar + Name */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-800 font-bold text-sm shadow">
              {getInitials(user.name)}
            </div>
            <div className="text-sm md:text-base">
              <h3 className="font-semibold text-gray-800">{user.name}</h3>
            </div>
          </div>

          {/* Points */}
          <div className="font-mono text-gray-700 text-sm md:text-lg">
            {user.points} pts
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardList;
