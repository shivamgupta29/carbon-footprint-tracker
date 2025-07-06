import React, { useState } from "react";

const applianceWattages = {
  Fan: 70,
  AC: 1500,
  Fridge: 150,
  TV: 100,
  Light: 20,
};

const Electricity = () => {
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

  const calculateTotal = () => {
    return Object.entries(hoursUsed)
      .reduce((total, [appliance, hours]) => {
        const watts = applianceWattages[appliance] || 0;
        return total + (watts * Number(hours || 0)) / 1000;
      }, 0)
      .toFixed(2);
  };
  const calculateCo2 = () => {
    const totalkwh = Object.entries(hoursUsed).reduce(
      (total, [appliance, hours]) => {
        const watts = applianceWattages[appliance] || 0;
        return total + (watts * Number(hours || 0)) / 1000;
      },
      0
    );
    const EMISSION_PER_KWH = 0.8; //dummy
    return (totalkwh * EMISSION_PER_KWH).toFixed(2);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
      <h2 className="text-base font-semibold mb-2">Electricity Usage</h2>
      <p className="text-sm text-gray-600 mb-4">
        Enter hours used for each appliance
      </p>

      <div className="w-full max-w-sm space-y-4">
        {Object.keys(applianceWattages).map((appliance) => (
          <div key={appliance} className="flex justify-between items-center">
            <label className="text-sm font-medium">{appliance}</label>
            <input
              type="number"
              value={hoursUsed[appliance]}
              placeholder="Hours"
              min="0"
              max="24"
              onChange={(e) => handleChange(appliance, e.target.value)}
              className="w-24 border px-3 py-2 rounded"
            />
          </div>
        ))}
      </div>

      <p className="mt-6 text-sm">
        Total Estimated Consumption: <strong>{calculateTotal()} kWh/day</strong>
      </p>
      <p>
        Estimated CO₂ Emissions:<strong>{calculateCo2()} kg CO₂</strong>
      </p>
    </div>
  );
};

export default Electricity;
