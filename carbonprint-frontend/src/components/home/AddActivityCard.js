// import { useContext } from "react";
// import { EmissionContext } from "../../context/EmissionContext";

// import { useNavigate } from "react-router-dom";
// const AddActivity = () => {
//   const { emissions } = useContext(EmissionContext);
//   const navigate = useNavigate();

//   const total = emissions
//     ? (
//         Number(emissions.electricity) +
//         Number(emissions.water) +
//         Number(emissions.transport) +
//         Number(emissions.food) +
//         Number(emissions.LPG)
//       ).toFixed(2)
//     : null;

//   return (
//     <div
//       onClick={() => navigate("/addactivity")}
//       className="bg-white p-6 rounded-xl shadow-lg h-64 flex flex-col justify-center items-center hover:shadow-xl hover:scale-[1.02] cursor-pointer"
//     >
//       <h1 className="text-xl font-semibold mb-4">➕ Add Activity</h1>
//       {emissions ? (
//         <div className="w-full text-sm space-y-2 text-gray-700 text-left">
//           <div>⚡ Electricity: {emissions.electricity} kg CO₂</div>
//           <div>🚿 Water: {emissions.water} kg CO₂</div>
//           <div>🚗 Transport: {emissions.transport} kg CO₂</div>
//           <div>🍽️ Food: {emissions.food} kg CO₂</div>
//           <div>🔥 LPG: {emissions.LPG} kg CO₂</div>

//           <hr className="my-2" />

//           <div className="font-semibold text-green-600">
//             🧮 Total Emission: {total} kg CO₂
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-sm text-center">
//           No activity logged yet. Click to add.
//         </p>
//       )}
//     </div>
//   );
// };
// export default AddActivity;
