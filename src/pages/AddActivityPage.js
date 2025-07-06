import Transport from "../components/activity/Transport";
import Food from "../components/activity/Food";
import LPG from "../components/activity/LPG";
import Water from "../components/activity/Water";
import Electricity from "../components/activity/Electricity";
import { EmissionContext } from "../context/EmissionContext";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
const AddActivityPage = () => {
  const { setEmissions } = useContext(EmissionContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      electricity: 3.2,
      water: 2.1,
      transport: 5.4,
      food: 6.1,
      LPG: 30.3,
    };
    data.total = (
      data.electricity +
      data.water +
      data.transport +
      data.food +
      data.LPG
    ).toFixed(2);

    setEmissions(data); // update context
    navigate("/"); // go to Dashboard
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full max-w-6xl mx-auto p-6 flex flex-col">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Log today's activity</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <Food />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Transport />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Water />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Electricity />
        </div>
        <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
          <LPG />
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 hover:scale-105 transition duration-200"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddActivityPage;
