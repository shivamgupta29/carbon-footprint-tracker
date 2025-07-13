import React from "react";
import { useEmission } from "../../context/EmissionContext";
import { useNavigate } from "react-router-dom";
import { Plus, Activity, TrendingUp } from "lucide-react";

const AddActivity = () => {
  const { emissions, totalEmissions } = useEmission();
  const navigate = useNavigate();

  const categoryIcons = {
    electricity: "⚡",
    water: "🚿",
    transport: "🚗",
    food: "🍽️",
    lpg: "🔥"
  };

  const categoryNames = {
    electricity: "Electricity",
    water: "Water",
    transport: "Transport", 
    food: "Food",
    lpg: "LPG"
  };

  return (
    <div
      onClick={() => navigate("/addactivity")}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group card-hover"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Quick Add</h2>
        <div className="bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors">
          <Plus className="w-5 h-5 text-green-600" />
        </div>
      </div>

      {totalEmissions > 0 ? (
        <div className="space-y-3">
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Current Emissions</span>
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-800">
              {totalEmissions.toFixed(1)} <span className="text-sm font-normal text-gray-500">kg CO₂</span>
            </div>
          </div>

          <div className="space-y-2">
            {Object.entries(emissions).map(([key, value]) => (
              value > 0 && (
                <div key={key} className="flex items-center justify-between text-sm">
                  <span className="flex items-center space-x-2">
                    <span>{categoryIcons[key]}</span>
                    <span className="text-gray-600">{categoryNames[key]}</span>
                  </span>
                  <span className="font-medium text-gray-800">{value.toFixed(1)} kg</span>
                </div>
              )
            ))}
          </div>

          <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2">
            <Activity className="w-4 h-4" />
            <span>Add New Activity</span>
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Activity className="w-8 h-8 text-gray-400" />
          </div>
          <p className="text-gray-500 text-sm mb-4">
            No activities logged yet. Start tracking your carbon footprint!
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mx-auto">
            <Plus className="w-4 h-4" />
            <span>Add First Activity</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default AddActivity;
