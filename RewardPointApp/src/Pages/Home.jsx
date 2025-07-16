import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiConnector";
import { userApi } from "../services/apis";
import UserSelector from "../components/UserSelector";
import ClaimButton from "../components/ClaimButton";
import AddUser from "../components/AddUser";
import TOPCards from "../components/TOPCards";
import LeaderboardList from "../components/LeaderBoardList";
import { NavLink } from "react-router-dom";
import bgImage from "../assets/chess.webp"

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await apiConnector("GET", userApi.getUserDetail);
      setUsers(response.data.users);
    } catch (err) {
      console.error("Failed to fetch users:", err.message);
    }
  };

  return (
    <div className="min-h-screen  relative p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-indigo-900 drop-shadow-lg">
        Points Battle Arena
      </h1>

      <div className="absolute top-5 right-5 z-20">
        <NavLink
          to="/history"
          className="bg-indigo-700 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-indigo-800 transition-all duration-300"
        >
          View History
        </NavLink>
      </div>

      <div className="flex flex-col items-center gap-6 mb-10 max-w-xl mx-auto px-2 w-full">
        <UserSelector users={users} setSelectedUserId={setSelectedUserId} />
        <ClaimButton userId={selectedUserId} onClaim={fetchUsers} />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <TOPCards users={users?.slice(0, 3)} />
        <LeaderboardList users={users?.slice(3)} />
      </div>

      {/* Responsive AddUser button */}
      <div
        className="
          fixed bottom-8 right-8 z-30
          sm:absolute sm:top-20 sm:right-8
        "
      >
        <AddUser userAdded={fetchUsers} />
      </div>
    </div>
  );
};

export default Home;
