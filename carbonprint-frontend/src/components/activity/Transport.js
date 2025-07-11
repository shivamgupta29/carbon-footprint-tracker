// import React, { useState, useEffect } from "react";

// const Transport = ({ onChange }) => {
//   const emissionRates = {
//     "Petrol Car": 0.192,
//     "Diesel Car": 0.171,
//     Bus: 0.089,
//     "Bike/Scooter": 0.073,
//     Train: 0.041,
//     Metro: 0.03,
//     "Auto Rickshaw": 0.094,
//     "Bicycle/Walking": 0,
//   };

//   const [distances, setDistances] = useState(
//     Object.keys(emissionRates).reduce((acc, type) => {
//       acc[type] = "";
//       return acc;
//     }, {})
//   );

//   const handleChange = (type, value) => {
//     const num = Number(value);
//     if (num < 0 || num > 1000) return;

//     setDistances((prev) => ({
//       ...prev,
//       [type]: value,
//     }));
//   };

//   const totalEmission = Object.entries(distances)
//     .reduce((total, [type, km]) => {
//       const perKm = emissionRates[type];
//       return total + perKm * Number(km || 0);
//     }, 0)
//     .toFixed(2);

//   // Send data to parent whenever distances change
//   useEffect(() => {
//     if (onChange) {
//       onChange({
//         ...distances,
//         emission: Number(totalEmission),
//       });
//     }
//   }, [distances]);

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
//       <h2 className="text-base font-semibold mb-2">Transport Usage</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Enter the distance (in km) you travel per day by each mode of transport.
//       </p>

//       {Object.keys(emissionRates).map((type) => (
//         <div key={type} className="mb-4 w-full max-w-xs">
//           <label className="block mb-1 font-semibold">{type}</label>
//           <input
//             type="number"
//             min="0"
//             max="500"
//             placeholder="Distance in km"
//             value={distances[type]}
//             onChange={(e) => handleChange(type, e.target.value)}
//             className="w-full px-3 py-2 border rounded text-center"
//           />
//           <p className="text-xs text-gray-500 mt-1">
//             Emission factor: {emissionRates[type]} kg CO₂/km
//           </p>
//         </div>
//       ))}

//       <div className="mt-4 text-sm text-gray-700">
//         Estimated Daily CO₂ Emissions: <strong>{totalEmission} kg CO₂</strong>
//       </div>
//     </div>
//   );
// };

// export default Transport;
