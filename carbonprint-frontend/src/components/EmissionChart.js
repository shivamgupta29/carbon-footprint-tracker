import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import { useEmission } from "../context/EmissionContext";

const EmissionChart = () => {
  const { emissions, totalEmissions } = useEmission();
  const [chartType, setChartType] = useState("bar");
  const [chartData, setChartData] = useState([]);
  const WEEKLY_GOAL = 140; // kg CO₂

  const COLORS = {
    electricity: "#3B82F6",
    water: "#06B6D4",
    transport: "#8B5CF6",
    food: "#10B981",
    lpg: "#F59E0B",
  };

  useEffect(() => {
    const data = Object.entries(emissions).map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value: value,
      percentage: totalEmissions > 0 ? ((value / totalEmissions) * 100).toFixed(1) : 0,
      color: COLORS[key],
    }));
    setChartData(data);
  }, [emissions, totalEmissions]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{label}</p>
          <p className="text-blue-600">
            {`${payload[0].value.toFixed(1)} kg CO₂`}
          </p>
          <p className="text-gray-600 text-sm">
            {`${payload[0].payload.percentage}% of total`}
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomPieTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800">{payload[0].name}</p>
          <p className="text-blue-600">
            {`${payload[0].value.toFixed(1)} kg CO₂`}
          </p>
          <p className="text-gray-600 text-sm">
            {`${payload[0].payload.percentage}% of total`}
          </p>
        </div>
      );
    }
    return null;
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="name" 
          tick={{ fill: '#6B7280', fontSize: 12 }}
          axisLine={{ stroke: '#D1D5DB' }}
        />
        <YAxis 
          tick={{ fill: '#6B7280', fontSize: 12 }}
          axisLine={{ stroke: '#D1D5DB' }}
          label={{ value: 'kg CO₂', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={chartData.filter(item => item.value > 0)}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percentage }) => `${name} (${percentage}%)`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip content={<CustomPieTooltip />} />
      </PieChart>
    </ResponsiveContainer>
  );

  if (totalEmissions === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-lg font-semibold mb-2">No emissions data yet</h3>
        <p className="text-sm text-center">
          Start tracking your carbon footprint by adding your first activity
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Chart Type Toggle */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          Emissions Overview ({totalEmissions.toFixed(1)} kg CO₂)
        </h3>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              chartType === "bar"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setChartType("bar")}
          >
            Bar Chart
          </button>
          <button
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              chartType === "pie"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
            onClick={() => setChartType("pie")}
          >
            Pie Chart
          </button>
        </div>
      </div>

      {/* Chart */}
      {chartType === "bar" ? renderBarChart() : renderPieChart()}

      {/* Goal Progress */}
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">Weekly Goal Progress</span>
          <span className="text-sm text-gray-600">
            {totalEmissions.toFixed(1)} / {WEEKLY_GOAL} kg CO₂
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${
              totalEmissions > WEEKLY_GOAL ? "bg-red-500" : "bg-green-500"
            }`}
            style={{ width: `${Math.min((totalEmissions / WEEKLY_GOAL) * 100, 100)}%` }}
          ></div>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          {totalEmissions > WEEKLY_GOAL
            ? `${(totalEmissions - WEEKLY_GOAL).toFixed(1)} kg CO₂ over goal`
            : `${(WEEKLY_GOAL - totalEmissions).toFixed(1)} kg CO₂ remaining`}
        </p>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {chartData.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs text-gray-600">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmissionChart;
