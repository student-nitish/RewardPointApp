import React from "react";
import { userApi } from "../services/apis";
 import { apiConnector } from "../services/apiConnector";
import { FaBolt } from "react-icons/fa";
import toast from "react-hot-toast";

const ClaimButton = ({ userId, onClaim }) => {
  const handleClaim = async () => {
    if (!userId) return alert("Please select a user.");

    try {
        console.log(userId)
      const res = await apiConnector("POST", userApi.claimPoints, { userId });
      toast.success(`User got ${res.data.claimed} points!`);
      onClaim();
    } catch (err) {
      toast.error("Error claiming points: " + err.message);
    }
  };

  return (
    <button
      onClick={handleClaim}
      className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded shadow hover:bg-yellow-600 flex items-center gap-2"
    >
      <FaBolt /> Claim Points
    </button>
  );
};

export default ClaimButton;
