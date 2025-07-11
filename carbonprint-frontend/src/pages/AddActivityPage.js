// import Transport from "../components/activity/Transport";
// import Food from "../components/activity/Food";
// import LPG from "../components/activity/LPG";
// import Water from "../components/activity/Water";
// import Electricity from "../components/activity/Electricity";
// import { EmissionContext } from "../context/EmissionContext";
// import { useState, useContext, useCallback } from "react";
// import { useNavigate } from "react-router-dom";

// const AddActivityPage = () => {
//   const { setEmissions } = useContext(EmissionContext);
//   const navigate = useNavigate();

//   const [activityData, setActivityData] = useState({
//     electricity: {},
//     water: {},
//     transport: {},
//     food: {},
//     lpg: {},
//   });

//   // Unified handler for all child components
//   const handleActivityChange = useCallback((category, data) => {
//     setActivityData((prev) => ({
//       ...prev,
//       [category]: data,
//     }));
//   }, []);
//   const handleSubmit = () => {
//     const data = {
//       electricity: activityData.electricity.emission || 0,
//       electricityDetails: activityData.electricity,

//       water: activityData.water.emission || 0,
//       waterDetails: activityData.water,

//       transport: activityData.transport.emission || 0,
//       transportDetails: activityData.transport,

//       food: activityData.food.emission || 0,
//       foodDetails: activityData.food,

//       LPG: activityData.lpg.emission || 0,
//       lpgDetails: activityData.lpg,
//     };

//     data.total = (
//       data.electricity +
//       data.water +
//       data.transport +
//       data.food +
//       data.LPG
//     ).toFixed(2);

//     setEmissions(data);
//     navigate("/");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 w-full max-w-6xl mx-auto p-6 flex flex-col">
//       <h1 className="text-3xl font-bold mb-6">Log today's activity</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         <div className="bg-white rounded-xl shadow p-6">
//           <Food onChange={(data) => handleActivityChange("food", data)} />
//         </div>
//         <div className="bg-white rounded-xl shadow p-6">
//           <Transport
//             onChange={(data) => handleActivityChange("transport", data)}
//           />
//         </div>
//         <div className="bg-white rounded-xl shadow p-6">
//           <Water onChange={(data) => handleActivityChange("water", data)} />
//         </div>
//         <div className="bg-white rounded-xl shadow p-6">
//           <Electricity
//             onChange={(data) => handleActivityChange("electricity", data)}
//           />
//         </div>
//         <div className="bg-white rounded-xl shadow p-6 md:col-span-2">
//           <LPG onChange={(data) => handleActivityChange("lpg", data)} />
//         </div>
//       </div>

//       <button
//         className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 hover:scale-105 transition duration-200"
//         onClick={handleSubmit}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default AddActivityPage;
