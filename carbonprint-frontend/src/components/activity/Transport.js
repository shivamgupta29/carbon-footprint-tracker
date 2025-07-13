import React, { useState, useEffect } from "react";

const Transport = ({ onChange }) => {
  const emissionRates = {
    "Petrol Car": 0.192,
    "Diesel Car": 0.171,
    Bus: 0.089,
    "Bike/Scooter": 0.073,
    Train: 0.041,
    Metro: 0.03,
    "Auto Rickshaw": 0.094,
    "Bicycle/Walking": 0,
  };

  const [distances, setDistances] = useState(
    Object.keys(emissionRates).reduce((acc, type) => {
      acc[type] = ""; // default empty for each mode
      return acc;
    }, {})
  );

  const handleChange = (type, value) => {
    const num = Number(value);
    if (num < 0 || num > 500) return;

    setDistances((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const entries = Object.entries(distances).map(([type, distance]) => {
    const km = Number(distance) || 0;
    return {
      mode: type,
      distance: km,
      emission: +(km * emissionRates[type]).toFixed(2),
    };
  });

  const totalEmission = entries
    .reduce((sum, entry) => sum + entry.emission, 0)
    .toFixed(2);

  // Push to parent
  useEffect(() => {
    if (onChange) {
      onChange({
        entries,
        emission: Number(totalEmission),
      });
    }
  }, [distances]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold text-green-700 mb-2">
        Transport Usage 🚗
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter daily distance (in km) by each mode of transport.
      </p>

      {Object.keys(emissionRates).map((type) => (
        <div key={type} className="mb-4 w-full max-w-xs">
          <label className="block mb-1 font-semibold text-gray-800">
            {type}
          </label>
          <input
            type="number"
            min="0"
            max="500"
            step="0.1"
            placeholder="Distance (km)"
            value={distances[type]}
            onChange={(e) => handleChange(type, e.target.value)}
            className="w-full px-3 py-2 border rounded text-center focus:outline-none focus:ring focus:ring-green-300"
          />
          <p className="text-xs text-gray-500 mt-1">
            {emissionRates[type]} kg CO₂/km
          </p>
        </div>
      ))}

      <div className="mt-4 text-sm text-gray-700 font-medium">
        Estimated Emissions:{" "}
        <span className="text-green-600 font-bold">{totalEmission} kg CO₂</span>
      </div>
    </div>
  );
};

export default Transport;
