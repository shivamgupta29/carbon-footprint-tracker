import React, { useState, useEffect } from "react";

const Water = ({ onChange }) => {
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

  const activityDetails = Object.entries(activityCount).map(
    ([activity, times]) => {
      const count = Number(times) || 0;
      const liters = count * defaultUsage[activity];
      const emission = +(liters * 0.0003).toFixed(4);

      return {
        activity,
        times: count,
        liters,
        emission: +emission.toFixed(2),
      };
    }
  );

  const totalLiters = activityDetails.reduce(
    (sum, item) => sum + item.liters,
    0
  );
  const totalCO2 = activityDetails
    .reduce((sum, item) => sum + item.emission, 0)
    .toFixed(2);

  // Notify parent
  useEffect(() => {
    if (onChange) {
      onChange({
        entries: activityDetails,
        totalLiters,
        emission: Number(totalCO2),
      });
    }
  }, [activityCount]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold text-green-700 mb-2">
        Water Usage 🚿
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        How many times per day do you perform each water-related activity?
      </p>

      {Object.keys(defaultUsage).map((activity) => (
        <div key={activity} className="mb-4 w-full max-w-xs">
          <label className="block mb-1 font-semibold text-gray-800">
            {activity}
          </label>
          <input
            type="number"
            min="0"
            max={activity === "Drinking" ? 50 : 10}
            placeholder="Times per day"
            value={activityCount[activity]}
            onChange={(e) => handleChange(activity, e.target.value)}
            className="w-full px-3 py-2 border rounded text-center focus:outline-none focus:ring focus:ring-green-300"
          />
          <p className="text-xs text-gray-500 mt-1">
            Uses approx. {defaultUsage[activity]} liters per time
            {activity === "Drinking" ? " (Max 50/day)" : " (Max 10/day)"}
          </p>
        </div>
      ))}

      <div className="mt-4 text-sm text-gray-700 font-medium">
        Total Water:{" "}
        <span className="text-blue-600 font-semibold">
          {totalLiters} liters
        </span>{" "}
        <br />
        Emissions:{" "}
        <span className="text-green-600 font-bold">{totalCO2} kg CO₂</span>
      </div>
    </div>
  );
};

export default Water;
