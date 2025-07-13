import React from "react";
import { useEmission } from "../../context/EmissionContext";
import { Clock, Target, TrendingUp, CheckCircle } from "lucide-react";

const ProgressCard = () => {
  const { totalEmissions } = useEmission();
  
  // Mock daily data - in a real app, this would come from your backend
  const dailyGoal = 10; // kg CO₂ per day
  const todayEmissions = totalEmissions * 0.1; // Simulate 10% is from today
  const progressPercentage = (todayEmissions / dailyGoal) * 100;
  
  // Calculate streak and other metrics
  const streak = Math.floor(Math.random() * 7) + 1; // Mock streak
  const isOnTrack = todayEmissions <= dailyGoal;
  const remaining = Math.max(0, dailyGoal - todayEmissions);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Today's Progress</h2>
        <Clock className="w-5 h-5 text-gray-400" />
      </div>

      {/* Daily Progress Circle */}
      <div className="flex items-center justify-center">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="8"
            />
            {/* Progress circle */}
            <circle
              cx="60"
              cy="60"
              r="54"
              fill="none"
              stroke={isOnTrack ? "#10b981" : "#ef4444"}
              strokeWidth="8"
              strokeDasharray={`${Math.min(progressPercentage, 100) * 3.39} 339`}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">
                {todayEmissions.toFixed(1)}
              </div>
              <div className="text-sm text-gray-500">kg CO₂</div>
              <div className="text-xs text-gray-400">
                of {dailyGoal} kg goal
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Message */}
      <div className={`p-4 rounded-lg ${
        isOnTrack 
          ? 'bg-green-50 border border-green-200' 
          : 'bg-red-50 border border-red-200'
      }`}>
        <div className="flex items-center space-x-2">
          {isOnTrack ? (
            <CheckCircle className="w-5 h-5 text-green-600" />
          ) : (
            <Target className="w-5 h-5 text-red-600" />
          )}
          <div>
            <div className={`font-medium ${
              isOnTrack ? 'text-green-800' : 'text-red-800'
            }`}>
              {isOnTrack ? "Great job! On track today" : "Over daily goal"}
            </div>
            <div className={`text-sm ${
              isOnTrack ? 'text-green-600' : 'text-red-600'
            }`}>
              {isOnTrack 
                ? `${remaining.toFixed(1)} kg CO₂ remaining`
                : `${(todayEmissions - dailyGoal).toFixed(1)} kg CO₂ over goal`
              }
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-blue-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Streak</span>
          </div>
          <div className="text-2xl font-bold text-blue-800 mt-1">
            {streak}
          </div>
          <div className="text-xs text-blue-600">
            {streak === 1 ? 'day' : 'days'} in a row
          </div>
        </div>

        <div className="bg-purple-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2">
            <Target className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Progress</span>
          </div>
          <div className="text-2xl font-bold text-purple-800 mt-1">
            {Math.min(progressPercentage, 100).toFixed(0)}%
          </div>
          <div className="text-xs text-purple-600">
            of daily goal
          </div>
        </div>
      </div>

      {/* Quick Tips */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-semibold text-gray-800 mb-2">💡 Quick Tips</h3>
        <div className="space-y-1 text-xs text-gray-600">
          {isOnTrack ? (
            <>
              <p>• You're doing great! Keep up the good work</p>
              <p>• Consider using public transport tomorrow</p>
              <p>• Try a plant-based meal for dinner</p>
            </>
          ) : (
            <>
              <p>• Try to reduce energy usage for the rest of the day</p>
              <p>• Walk or bike for short trips</p>
              <p>• Unplug electronics when not in use</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
