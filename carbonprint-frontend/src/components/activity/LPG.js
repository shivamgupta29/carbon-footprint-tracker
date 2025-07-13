import { useState, useEffect } from "react";

const LPG = ({ onChange }) => {
  const EMISSION_PER_CYLINDER = 30.3; // in kg CO₂ per cylinder

  const [cylinderUsed, setCylinderUsed] = useState("");

  const handleChange = (e) => {
    let rawValue = e.target.value;

    if (rawValue.length > 1) {
      rawValue = rawValue.replace(/^0+/, ""); // remove leading zeros
    }

    const value = Number(rawValue);
    if (value < 0 || value > 20) return; // hard limit

    setCylinderUsed(value);
  };

  const totalEmission = (cylinderUsed * EMISSION_PER_CYLINDER).toFixed(2);

  useEffect(() => {
    if (onChange) {
      onChange({
        cylinders: Number(cylinderUsed),
        emission: Number(totalEmission),
        emissionPerCylinder: EMISSION_PER_CYLINDER,
      });
    }
  }, [cylinderUsed]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold text-green-700 mb-1">
        LPG Usage 🔥
      </h2>
      <p className="text-sm text-gray-600 mb-2">
        How many LPG cylinders did you use this <strong>month</strong>?
      </p>
      <input
        type="number"
        value={cylinderUsed}
        onChange={handleChange}
        min="0"
        max="20"
        placeholder="No of cylinders"
        className="w-44 px-3 py-2 border rounded text-center focus:outline-none focus:ring focus:ring-green-300"
      />
      {cylinderUsed !== "" && (
        <p className="mt-3 text-sm text-gray-700">
          Estimated Emission:{" "}
          <span className="text-green-700 font-semibold">
            {totalEmission} kg CO₂
          </span>
        </p>
      )}
    </div>
  );
};

export default LPG;
