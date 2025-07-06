import React, { useState } from "react";

const Water = () => {
  const defaultUsage = {
    Bathing: 65,
    Drinking: 1,
    Dishwashing: 15,
    ClothesWashing: 40,
  };

  const [activityCount, setActivityCount] = useState({
    Bathing: "",
    Drinking: "",
    Dishwashing: "",
    ClothesWashing: "",
  });

  const handleChange = (activity, value) => {
    const num = Number(value);
    const maxLimit = activity === "Drinking" ? 50 : 10;
    if (num < 0 || num > maxLimit) return;

    setActivityCount((prev) => ({
      ...prev,
      [activity]: value,
    }));
  };

  const calculateTotal = () => {
    return Object.entries(activityCount).reduce((total, [activity, times]) => {
      const perUse = defaultUsage[activity] || 0;
      return total + perUse * Number(times || 0);
    }, 0);
  };

  const totalLiters = calculateTotal();
  const co2PerLiter = 0.0003; // example dummy value
  const totalCO2 = (totalLiters * co2PerLiter).toFixed(2);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold mb-2">Water Usage</h2>
      <p className="text-sm text-gray-600 mb-4">
        How many times do you do each activity per day?
      </p>

      {Object.keys(defaultUsage).map((activity) => (
        <div key={activity} className="mb-4 w-full max-w-xs">
          <label className="block mb-1 font-semibold">{activity}</label>
          <input
            type="number"
            min="0"
            max={activity === "Drinking" ? 50 : 10}
            placeholder="Times per day"
            value={activityCount[activity]}
            onChange={(e) => handleChange(activity, e.target.value)}
            className="w-full px-3 py-2 border rounded text-center"
          />
          <p className="text-xs text-gray-500 mt-1">
            Uses approx. {defaultUsage[activity]} liters per time
            {activity === "Drinking" ? " (Max 50x/day)" : " (Max 10x/day)"}
          </p>
        </div>
      ))}

      <div className="mt-4 text-sm text-gray-700">
        Estimated Daily Water Used: <strong>{totalLiters} liters</strong>
        <br />
        Estimated CO₂ Emissions: <strong>{totalCO2} kg CO₂</strong>
      </div>
    </div>
  );
};

export default Water;
