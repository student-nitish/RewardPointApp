import React, { useEffect, useState } from "react";
import { apiConnector } from "../services/apiConnector";
import { historyUrl } from "../services/apis";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const HistoryPreview = () => {
    const [history, setHistory] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const res = await apiConnector("GET", historyUrl.getAllHistory);
            setHistory(res.data.history || []);
        } catch (err) {
            toast.error("Failed to fetch history");
            console.error("Failed to fetch history:", err.message);
        }
    };

    return (
        <div className="mt-6 bg-white shadow-md rounded-lg p-4 max-w-3xl mx-auto">

            <div
                className="bg-blue-400 cursor-pointer px-2.5 py-3 flex items-center justify-center gap-2 rounded-lg w-fit"
                onClick={() => {
                    navigate(-1);
                }}>
                <FaArrowLeft />
                <p>Back</p>


            </div>
            <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
                Claim History

            </h2>

            {history.length === 0 ? (
                <p className="text-center text-gray-500">No history yet</p>
            ) : (
                <div className="overflow-x-auto">
                  
                    <div className="flex font-semibold text-gray-700 border-b pb-2 mb-2">
                        <div className="w-1/3 flex items-center gap-1">
                            <FaUserAlt /> Name
                        </div>
                        <div className="w-1/3 flex items-center gap-1">
                            <FaStar className="text-yellow-500" /> Points
                        </div>
                        <div className="w-1/3 flex items-center gap-1">
                            <AiOutlineClockCircle /> Time
                        </div>
                    </div>

                     
                    <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                        {history.map((item) => (
                            <li
                                key={item._id}
                                className="flex text-sm border-b border-gray-200 pb-1"
                            >
                                <div className="w-1/3">{item.user.name}</div>
                                <div className="w-1/3">{item.pointsAdded}</div>
                                <div className="w-1/3 text-gray-500 text-xs">
                                    {new Date(item.createdAt).toLocaleString()}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default HistoryPreview;
