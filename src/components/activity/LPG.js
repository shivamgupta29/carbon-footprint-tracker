import { useState } from "react";

const Food = () => {
  const [cylinderUsed, setCylinderUsed] = useState("");
  const handleChange = (e) => {
    let rawValue = e.target.value;

    // Remove all leading zeros (but keep a single 0 if that's all user entered)
    if (rawValue.length > 1) {
      rawValue = rawValue.replace(/^0+/, "");
    }

    // Convert to number (so we avoid values like '03', '09', etc.)
    const value = Number(rawValue);

    if (value < 0) return;

    setCylinderUsed(value);
  };
  const calculateEmission = () => {
    const EMISSION_PER_PEICE = 30.3;
    return (cylinderUsed * EMISSION_PER_PEICE).toFixed(2);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold mb-1">LPG Usage</h2>
      <p className="text-sm text-gray-600">
        How many LPG cylinder did you use this month?
      </p>
      <input
        type="number"
        value={cylinderUsed}
        onChange={handleChange}
        min="0"
        placeholder="No of cylinders"
        className="w-45 mt-2  px-3 py-2 border rounded text-center"
      />
      {cylinderUsed != "" && (
        <p className="mt-2">
          Estimated Emission:<strong>{calculateEmission()} kg CO₂</strong>
        </p>
      )}
    </div>
  );
};

export default Food;
