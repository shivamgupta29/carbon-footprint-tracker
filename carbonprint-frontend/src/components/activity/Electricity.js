import React, { useState, useEffect } from "react";

const applianceWattages = {
  Fan: 70,
  AC: 1500,
  Fridge: 150,
  TV: 100,
  Light: 20,
};

const Electricity = ({ onChange }) => {
  const [hoursUsed, setHoursUsed] = useState({
    Fan: "",
    AC: "",
    Fridge: "",
    TV: "",
    Light: "",
  });

  const handleChange = (appliance, value) => {
    const num = Number(value);
    if (num < 0 || num > 24) return;

    setHoursUsed((prev) => ({
      ...prev,
      [appliance]: value,
    }));
  };

  const applianceDetails = Object.entries(hoursUsed).map(
    ([appliance, hours]) => {
      const hrs = Number(hours) || 0;
      const kWh = +((applianceWattages[appliance] * hrs) / 1000).toFixed(3);
      const co2 = +(kWh * 0.8).toFixed(3);

      return {
        appliance,
        hours: hrs,
        kWh,
        emission: +co2.toFixed(2),
      };
    }
  );

  const totalKwh = applianceDetails
    .reduce((sum, a) => sum + a.kWh, 0)
    .toFixed(2);
  const totalEmission = applianceDetails
    .reduce((sum, a) => sum + a.emission, 0)
    .toFixed(2);

  useEffect(() => {
    if (onChange) {
      onChange({
        entries: applianceDetails,
        totalKwh: Number(totalKwh),
        emission: Number(totalEmission),
      });
    }
  }, [hoursUsed]);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold text-green-700 mb-2">
        Electricity Usage ⚡
      </h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter how many hours you use each appliance per day
      </p>

      <div className="w-full max-w-sm space-y-4">
        {Object.keys(applianceWattages).map((appliance) => (
          <div key={appliance} className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-800">
              {appliance}
            </label>
            <input
              type="number"
              value={hoursUsed[appliance]}
              placeholder="Hours"
              min="0"
              max="24"
              onChange={(e) => handleChange(appliance, e.target.value)}
              className="w-24 border px-3 py-2 rounded text-center focus:outline-none focus:ring focus:ring-green-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-700 font-medium">
        Daily Electricity:{" "}
        <span className="text-blue-600 font-semibold">{totalKwh} kWh</span>
        <br />
        CO₂ Emissions:{" "}
        <span className="text-green-600 font-bold">{totalEmission} kg CO₂</span>
      </div>
    </div>
  );
};

export default Electricity;
