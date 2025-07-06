import { useContext } from "react";
import { EmissionContext } from "../../context/EmissionContext";

import { useNavigate } from "react-router-dom";
const AddActivity = () => {
  const { emissions } = useContext(EmissionContext);
  const navigate = useNavigate();

  const total = emissions
    ? (
        Number(emissions.electricity) +
        Number(emissions.water) +
        Number(emissions.transport) +
        Number(emissions.food) +
        Number(emissions.LPG)
      ).toFixed(2)
    : null;

  return (
    <div
      onClick={() => navigate("/addactivity")}
      className="bg-white p-6 rounded-xl shadow-lg h-64 flex flex-col justify-center items-center hover:shadow-xl hover:scale-[1.02] cursor-pointer"
    >
      <h1 className="text-xl font-semibold mb-4">➕ Add Activity</h1>
      {emissions ? (
        <>
          <div className="text-sm text-gray-700 mb-2">
            ⚡ {emissions.electricity} | 🚿 {emissions.water} | 🚗{" "}
            {emissions.transport} | 🍽️ {emissions.food} | {emissions.LPG}
          </div>
          <div className="text-sm font-semibold text-green-600">
            🧮 Total: {total} kg CO₂
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-sm text-center">
          No activity logged yet. Click to add.
        </p>
      )}
    </div>
  );
};
export default AddActivity;
