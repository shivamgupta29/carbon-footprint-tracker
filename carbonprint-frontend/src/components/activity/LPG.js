// import { useState, useEffect } from "react";

// const LPG = ({ onChange }) => {
//   const [cylinderUsed, setCylinderUsed] = useState("");

//   const handleChange = (e) => {
//     let rawValue = e.target.value;

//     if (rawValue.length > 1) {
//       rawValue = rawValue.replace(/^0+/, "");
//     }

//     const value = Number(rawValue);
//     if (value < 0) return;

//     setCylinderUsed(value);
//   };

//   const EMISSION_PER_CYLINDER = 30.3;

//   const calculateEmission = () => {
//     return (cylinderUsed * EMISSION_PER_CYLINDER).toFixed(2);
//   };

//   // Notify parent on every change
//   useEffect(() => {
//     if (onChange) {
//       onChange({
//         cylinders: cylinderUsed,
//         emission: Number(calculateEmission()),
//       });
//     }
//   }, [cylinderUsed]);

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
//       <h2 className="text-base font-semibold mb-1">LPG Usage</h2>
//       <p className="text-sm text-gray-600">
//         How many LPG cylinders did you use this month?
//       </p>
//       <input
//         type="number"
//         value={cylinderUsed}
//         onChange={handleChange}
//         min="0"
//         placeholder="No of cylinders"
//         className="w-45 mt-2 px-3 py-2 border rounded text-center"
//       />
//       {cylinderUsed !== "" && (
//         <p className="mt-2">
//           Estimated Emission: <strong>{calculateEmission()} kg CO₂</strong>
//         </p>
//       )}
//     </div>
//   );
// };

// export default LPG;
