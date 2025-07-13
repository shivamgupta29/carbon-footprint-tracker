import React, { useEffect, useState } from "react";
import { useAuth } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalEmission: 0,
    averageEmission: 0,
    bestDay: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/emission`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const activities = res.data.activities || [];

        if (activities.length === 0) return;

        const totalEmission = activities.reduce(
          (acc, curr) => acc + (curr.total || 0),
          0
        );

        const averageEmission = (totalEmission / activities.length).toFixed(2);

        const bestDay = Math.min(
          ...activities.map((a) => a.total || 0)
        ).toFixed(2);

        setStats({
          totalEmission: totalEmission.toFixed(2),
          averageEmission,
          bestDay,
        });
      } catch (err) {
        console.error("Error fetching emission data", err.message);
      }
    };

    fetchStats();
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src={`https://ui-avatars.com/api/?name=${user.firstname}+${user.lastname}`}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-green-500"
            />
            <div>
              <h2 className="text-2xl font-bold">
                {user.firstname} {user.lastname}
              </h2>
              <p className="text-gray-500">{user.email}</p>
              <p className="text-sm text-gray-400">
                Joined {new Date(user.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
              ✏️ Edit Profile
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
            >
              🔓 Logout
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-sm">Total Emissions</p>
            <h3 className="text-xl font-bold text-green-700">
              {stats.totalEmission} kg CO₂
            </h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-sm">Avg/Day</p>
            <h3 className="text-xl font-bold text-blue-700">
              {stats.averageEmission} kg CO₂
            </h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-gray-500 text-sm">Best Day</p>
            <h3 className="text-xl font-bold text-emerald-700">
              {stats.bestDay} kg CO₂
            </h3>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-2">🏅 Achievements</h4>
          <div className="flex flex-wrap gap-2">
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              🌱 Plant-Based Champion
            </span>
            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              🚿 Water Saver
            </span>
            <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
              🚌 Clean Commuter
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
