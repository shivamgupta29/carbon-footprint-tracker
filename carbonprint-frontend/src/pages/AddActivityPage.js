import axios from "axios";
import Transport from "../components/activity/Transport";
import Food from "../components/activity/Food";
import LPG from "../components/activity/LPG";
import Water from "../components/activity/Water";
import Electricity from "../components/activity/Electricity";
import { EmissionContext } from "../context/EmissionContext";
import { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AddActivityPage = () => {
  const { setEmissions } = useContext(EmissionContext);
  const navigate = useNavigate();

  const [activityData, setActivityData] = useState({
    electricity: {},
    water: {},
    transport: {},
    food: {},
    lpg: {},
  });
  const [loading, setLodaing] = useState(false);
  const [err, setErr] = useState("");
  // Unified handler for all child components
  const handleActivityChange = useCallback((category, data) => {
    //Callback prevents unnecassary renders
    setActivityData((prev) => ({
      ...prev,
      [category]: data,
    }));
  }, []);
  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setErr("You must be logged in to submit data.");
      return;
    }

    setLodaing(true);
    setErr("");

    const data = {
      electricity: Number(activityData.electricity.emission || 0),
      electricityDetails: activityData.electricity || {},

      water: Number(activityData.water.emission || 0),
      waterDetails: activityData.water || {},

      transport: Number(activityData.transport.emission || 0),
      transportDetails: activityData.transport || {},

      food: Number(activityData.food.emission || 0),
      foodDetails: activityData.food || {},

      LPG: Number(activityData.lpg.emission || 0),
      lpgDetails: activityData.lpg || {},
    };

    data.total = (
      data.electricity +
      data.water +
      data.transport +
      data.food +
      data.LPG
    ).toFixed(2);

    console.log("Submitting data:", data);

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/emission`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("✅ Backend Response:", res); // ADD THIS

      if (!token) {
        setErr("You must be logged in to submit data.");
        setLodaing(false);
        return;
      }

      setEmissions(res.data);
      navigate("/");
    } catch (error) {
      console.error("❌ Submission Error:", error?.response || error);
      setErr(
        error.response?.data?.message ||
          "Something went wrong while submitting."
      );
    } finally {
      setLodaing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full max-w-6xl mx-auto p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Log today's activity</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-xl shadow p-6">
          <Food onChange={(data) => handleActivityChange("food", data)} />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Transport
            onChange={(data) => handleActivityChange("transport", data)}
          />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Water onChange={(data) => handleActivityChange("water", data)} />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <Electricity
            onChange={(data) => handleActivityChange("electricity", data)}
          />
        </div>
        <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
          <LPG onChange={(data) => handleActivityChange("lpg", data)} />
        </div>
      </div>
      {err && <p className="text-red-600 text-sm mb-4 text-center">{err}</p>}
      <button
        className={`w-full py-3 text-white rounded-lg font-semibold transition ${
          loading
            ? "bg-blue-300 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-500 hover:scale-105"
        }`}
        disabled={loading}
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default AddActivityPage;
