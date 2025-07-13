import React, { useContext, useEffect } from "react";
import { EmissionContext } from "../../context/EmissionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#10B981", "#3B82F6", "#F59E0B", "#EF4444", "#8B5CF6"];

const Dashboard = () => {
  const { emissions, setEmissions } = useContext(EmissionContext);
  const navigate = useNavigate();

  const hasData = emissions?.total;

  useEffect(() => {
    const fetchEmissions = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.warn("No token found");
        return;
      }

      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/emission/summary`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Fetched emissions summary:", res.data);
        setEmissions(res.data);
      } catch (err) {
        console.error("❌ Failed to fetch emissions summary:", err);
      }
    };

    fetchEmissions();
  }, [setEmissions]);

  const pieData = hasData
    ? [
        { name: "Transport", value: emissions.transport },
        { name: "Food", value: emissions.food },
        { name: "Water", value: emissions.water },
        { name: "Electricity", value: emissions.electricity },
        { name: "LPG", value: emissions.LPG },
      ]
    : [];

  return (
    <div className="w-full h-full p-4 text-green">
      <h1 className="text-2xl font-bold mb-6">🌿 CarbonPrint Dashboard</h1>

      {!hasData ? (
        <div className="text-center text-gray-300">
          <p className="mb-4">No emissions data logged yet.</p>
          <button
            onClick={() => navigate("/addactivity")}
            className="bg-green-600 hover:bg-green-500 px-6 py-2 rounded-lg transition"
          >
            Log Your First Activity
          </button>
        </div>
      ) : (
        <>
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-800 rounded-lg p-4 shadow-md text-center">
              <h2 className="text-sm text-gray-400">Total Emissions Today</h2>
              <p className="text-3xl font-bold text-green-400">
                {emissions.total} kg CO₂
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow-md text-center">
              <h2 className="text-sm text-gray-400">Best Day (Mock)</h2>
              <p className="text-3xl font-bold text-emerald-400">8.21 kg CO₂</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 shadow-md text-center">
              <h2 className="text-sm text-gray-400">
                Avg Daily Emission (Mock)
              </h2>
              <p className="text-3xl font-bold text-yellow-400">17.64 kg CO₂</p>
            </div>
          </div>

          {/* Emission Breakdown */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">
              📊 Emission Breakdown (Pie Chart)
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Breakdown List */}
          <div className="bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold mb-4 text-white">
              📋 Breakdown by Activity
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                🚗 Transport: <strong>{emissions.transport} kg</strong>
              </li>
              <li>
                🍱 Food: <strong>{emissions.food} kg</strong>
              </li>
              <li>
                💧 Water: <strong>{emissions.water} kg</strong>
              </li>
              <li>
                ⚡ Electricity: <strong>{emissions.electricity} kg</strong>
              </li>
              <li>
                🪔 LPG: <strong>{emissions.LPG} kg</strong>
              </li>
            </ul>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate("/addactivity")}
              className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-lg transition text-white"
            >
              + Log Another Activity
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
