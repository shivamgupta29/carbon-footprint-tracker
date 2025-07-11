// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { useState, useEffect } from "react";
// // import { db, auth } from "../firebase";
// // import { collection, getDocs } from "firebase/firestore";

// const EmissionChart = () => {
//   const [chartData, setChartData] = useState([]);
//   const WEEKLY_GOAL = 140; // kg CO₂

//   useEffect(() => {
//     const fetchEmissions = async () => {
//       const userId = auth.currentUser?.uid;
//       if (!userId) return;

//       const emissionsRef = collection(db, "users", userId, "emissions");
//       const snapshot = await getDocs(emissionsRef);

//       const entries = [];
//       snapshot.forEach((doc) => {
//         const date = doc.id;
//         const data = doc.data();
//         if (data.total) {
//           entries.push({ date, emission: Number(data.total) });
//         }
//       });

//       // Sort by date and take last 7 days
//       const sorted = entries
//         .sort((a, b) => new Date(a.date) - new Date(b.date))
//         .slice(-7);

//       const finalData = sorted.map((entry) => {
//         const day = new Date(entry.date).toLocaleDateString("en-US", {
//           weekday: "short",
//         });
//         return { ...entry, day };
//       });

//       setChartData(finalData);
//     };

//     fetchEmissions();
//   }, []);

//   const totalThisWeek = chartData.reduce(
//     (sum, entry) => sum + Number(entry.emission || 0),
//     0
//   );

//   const progressPercentage = ((totalThisWeek / WEEKLY_GOAL) * 100).toFixed(1);
//   const withinGoal = totalThisWeek <= WEEKLY_GOAL;

//   return (
//     <div className="w-full h-72 bg-white rounded-xl p-4 shadow">
//       <h2 className="text-lg font-semibold mb-2">📊 Weekly Emission</h2>
//       <ResponsiveContainer width="100%" height="60%">
//         <BarChart data={chartData}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="day" />
//           <YAxis unit=" kg" />
//           <Tooltip />
//           <Bar dataKey="emission" fill="#3b82f6" radius={[4, 4, 0, 0]} />
//         </BarChart>
//       </ResponsiveContainer>

//       <div className="mt-4 text-sm text-gray-700 text-center">
//         <p>
//           🧮 <strong>{totalThisWeek.toFixed(2)} kg CO₂</strong> emitted this
//           week
//         </p>
//         <p>
//           🎯 Goal: <strong>{WEEKLY_GOAL} kg CO₂</strong>
//         </p>
//         <p className={withinGoal ? "text-green-600" : "text-red-600"}>
//           {withinGoal
//             ? "✅ You are within your weekly goal!"
//             : "⚠️ You have exceeded your weekly goal."}
//         </p>

//         <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
//           <div
//             className={`h-3 rounded-full ${
//               withinGoal ? "bg-green-500" : "bg-red-500"
//             }`}
//             style={{ width: `${Math.min(progressPercentage, 100)}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmissionChart;
