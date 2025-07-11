// import React, { useState, useEffect } from "react";

// const Food = ({ onChange }) => {
//   const emissionRates = {
//     Vegetarian: 1.7,
//     Vegan: 1.5,
//     "Non-Vegetarian (Chicken)": 5.0,
//     "Non-Vegetarian (Mutton)": 7.0,
//     "Non-Vegetarian (Fish)": 3.5,
//     "Egg-based Meal": 2.0,
//     "Dairy-based Meal": 2.5,
//     "Fast Food": 4.0,
//     "Junk Food/Snacks": 2.0,
//   };

//   const [foodEntries, setFoodEntries] = useState([{ type: "", servings: "" }]);

//   const handleChange = (index, field, value) => {
//     const updated = [...foodEntries];
//     if (field === "servings" && (value < 0 || value > 10)) return;
//     updated[index][field] = value;
//     setFoodEntries(updated);
//   };

//   const addEntry = () => {
//     setFoodEntries([...foodEntries, { type: "", servings: "" }]);
//   };

//   const removeEntry = (index) => {
//     if (foodEntries.length === 1) return;
//     const updated = foodEntries.filter((_, i) => i !== index);
//     setFoodEntries(updated);
//   };

//   const totalEmission = foodEntries
//     .reduce((total, entry) => {
//       const rate = emissionRates[entry.type] || 0;
//       return total + rate * Number(entry.servings || 0);
//     }, 0)
//     .toFixed(2);

//   // Send data to parent
//   useEffect(() => {
//     if (onChange) {
//       onChange({
//         entries: foodEntries,
//         emission: Number(totalEmission),
//       });
//     }
//   }, [foodEntries]);

//   return (
//     <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
//       <h2 className="text-base font-semibold mb-2">Food Consumption</h2>
//       <p className="text-sm text-gray-600 mb-4">
//         Add different types of meals you consume in a day.
//       </p>

//       {foodEntries.map((entry, index) => (
//         <div
//           key={index}
//           className="mb-4 w-full max-w-xs border p-3 rounded relative"
//         >
//           <button
//             onClick={() => removeEntry(index)}
//             className="absolute top-1 right-2 text-red-500 text-xs"
//           >
//             ✕
//           </button>

//           <label className="block mb-1 font-semibold">Food Type</label>
//           <select
//             value={entry.type}
//             onChange={(e) => handleChange(index, "type", e.target.value)}
//             className="w-full px-3 py-2 border rounded mb-2"
//           >
//             <option value="">Select type</option>
//             {Object.keys(emissionRates).map((type) => (
//               <option key={type} value={type}>
//                 {type}
//               </option>
//             ))}
//           </select>

//           <label className="block mb-1 font-semibold">Servings</label>
//           <input
//             type="number"
//             min="0"
//             max="10"
//             placeholder="e.g. 2"
//             value={entry.servings}
//             onChange={(e) => handleChange(index, "servings", e.target.value)}
//             className="w-full px-3 py-2 border rounded text-center"
//           />

//           {entry.type && (
//             <p className="text-xs text-gray-500 mt-1">
//               {emissionRates[entry.type]} kg CO₂ per serving
//             </p>
//           )}
//         </div>
//       ))}

//       <button
//         onClick={addEntry}
//         className="mb-4 bg-green-500 text-white px-4 py-1 rounded text-sm"
//       >
//         + Add Another Meal
//       </button>

//       <div className="mt-2 text-sm text-gray-700">
//         Estimated Daily CO₂ Emissions: <strong>{totalEmission} kg CO₂</strong>
//       </div>
//     </div>
//   );
// };

// export default Food;
