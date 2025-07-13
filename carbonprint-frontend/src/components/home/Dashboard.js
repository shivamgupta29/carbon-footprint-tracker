import React from "react";
import AddActivity from "./AddActivityCard";
import EmissionOverview from "./EmissionOverview";
import ProgressCard from "./ProgressCard";
import EmissionChart from "../EmissionChart";
import { useEmission } from "../../context/EmissionContext";

const Dashboard = () => {
  const { emissions, totalEmissions, loading } = useEmission();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Dashboard</h2>
        <p className="text-gray-600">Monitor your carbon footprint and environmental impact</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Total Emissions</h3>
          <p className="text-2xl font-bold text-gray-900">{totalEmissions.toFixed(1)} kg CO₂</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">This Month</h3>
          <p className="text-2xl font-bold text-green-600">{(totalEmissions * 0.3).toFixed(1)} kg CO₂</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Average Daily</h3>
          <p className="text-2xl font-bold text-blue-600">{(totalEmissions / 30).toFixed(1)} kg CO₂</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-sm font-medium text-gray-500">Goal Progress</h3>
          <p className="text-2xl font-bold text-yellow-600">67%</p>
        </div>
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Chart and Overview */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Emissions Breakdown</h3>
            <EmissionChart />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Overview</h3>
            <EmissionOverview />
          </div>
        </div>

        {/* Right Column - Actions and Progress */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
            <AddActivity emissions={emissions} />
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Progress</h3>
            <ProgressCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
