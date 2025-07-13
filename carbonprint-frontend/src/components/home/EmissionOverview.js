import React from "react";
import { useEmission } from "../../context/EmissionContext";
import { Calendar, TrendingDown, TrendingUp, Target, Award } from "lucide-react";

const EmissionOverview = () => {
  const { emissions, totalEmissions, getEmissionPercentage } = useEmission();

  // Mock data for weekly and monthly comparisons
  const weeklyEmissions = totalEmissions * 0.3; // Simulate 30% is from this week
  const monthlyEmissions = totalEmissions * 0.8; // Simulate 80% is from this month
  const weeklyGoal = 50; // kg CO₂ per week
  const monthlyGoal = 200; // kg CO₂ per month

  const getHighestEmissionCategory = () => {
    const categories = Object.entries(emissions);
    const highest = categories.reduce((max, [key, value]) => 
      value > max.value ? { category: key, value } : max, 
      { category: '', value: 0 }
    );
    return highest;
  };

  const getLowestEmissionCategory = () => {
    const categories = Object.entries(emissions).filter(([key, value]) => value > 0);
    if (categories.length === 0) return { category: '', value: 0 };
    
    const lowest = categories.reduce((min, [key, value]) => 
      value < min.value ? { category: key, value } : min, 
      { category: categories[0][0], value: categories[0][1] }
    );
    return lowest;
  };

  const highest = getHighestEmissionCategory();
  const lowest = getLowestEmissionCategory();

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Emission Overview</h2>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      {totalEmissions > 0 ? (
        <div className="space-y-4">
          {/* Weekly Progress */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-blue-700">This Week</span>
              <TrendingUp className="w-4 h-4 text-blue-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-blue-800">
                  {weeklyEmissions.toFixed(1)} kg CO₂
                </div>
                <div className="text-xs text-blue-600">
                  Goal: {weeklyGoal} kg CO₂
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${
                  weeklyEmissions <= weeklyGoal ? 'text-green-600' : 'text-red-600'
                }`}>
                  {weeklyEmissions <= weeklyGoal ? '✓ On track' : '⚠ Over goal'}
                </div>
              </div>
            </div>
            <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full ${
                  weeklyEmissions <= weeklyGoal ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min((weeklyEmissions / weeklyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Monthly Progress */}
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-700">This Month</span>
              <Target className="w-4 h-4 text-green-600" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-800">
                  {monthlyEmissions.toFixed(1)} kg CO₂
                </div>
                <div className="text-xs text-green-600">
                  Goal: {monthlyGoal} kg CO₂
                </div>
              </div>
              <div className="text-right">
                <div className={`text-sm font-medium ${
                  monthlyEmissions <= monthlyGoal ? 'text-green-600' : 'text-red-600'
                }`}>
                  {monthlyEmissions <= monthlyGoal ? '✓ On track' : '⚠ Over goal'}
                </div>
              </div>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mt-2">
              <div
                className={`h-2 rounded-full ${
                  monthlyEmissions <= monthlyGoal ? 'bg-green-500' : 'bg-red-500'
                }`}
                style={{ width: `${Math.min((monthlyEmissions / monthlyGoal) * 100, 100)}%` }}
              ></div>
            </div>
          </div>

          {/* Insights */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Insights</h3>
            
            {highest.value > 0 && (
              <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <TrendingUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-red-800">
                    Highest Impact: {highest.category.charAt(0).toUpperCase() + highest.category.slice(1)}
                  </div>
                  <div className="text-sm text-red-600">
                    {highest.value.toFixed(1)} kg CO₂ ({getEmissionPercentage(highest.category)}% of total)
                  </div>
                </div>
              </div>
            )}

            {lowest.value > 0 && (
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <TrendingDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-green-800">
                    Lowest Impact: {lowest.category.charAt(0).toUpperCase() + lowest.category.slice(1)}
                  </div>
                  <div className="text-sm text-green-600">
                    {lowest.value.toFixed(1)} kg CO₂ ({getEmissionPercentage(lowest.category)}% of total)
                  </div>
                </div>
              </div>
            )}

            {/* Achievement */}
            {totalEmissions < 100 && (
              <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                <Award className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <div>
                  <div className="font-medium text-yellow-800">
                    🎉 Great job! Low carbon footprint
                  </div>
                  <div className="text-sm text-yellow-600">
                    Keep up the good work!
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-sm">
            No emission data available yet. Start tracking your activities to see insights.
          </p>
        </div>
      )}
    </div>
  );
};

export default EmissionOverview;
