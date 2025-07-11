// import React from "react";
// import { getAuth, signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const ProfilePage = () => {
//   const navigate = useNavigate();
//   const auth = getAuth();

//   const user = {
//     name: "Shivam Gupta",
//     email: auth.currentUser?.email || "shivam@example.com",
//     joinDate: "March 2025",
//     profilePic: "https://i.pravatar.cc/150?img=32", // replace with Firebase profile pic if using
//     totalEmission: 123.45,
//     averageEmission: 17.64,
//     bestDay: 8.21,
//   };

//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("User signed out");
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error("Logout error:", error);
//       });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//           <div className="flex items-center gap-4">
//             <img
//               src={user.profilePic}
//               alt="Profile"
//               className="w-24 h-24 rounded-full border-4 border-green-500"
//             />
//             <div>
//               <h2 className="text-2xl font-bold">{user.name}</h2>
//               <p className="text-gray-500">{user.email}</p>
//               <p className="text-sm text-gray-400">Joined {user.joinDate}</p>
//             </div>
//           </div>
//           <div className="flex gap-4">
//             <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
//               ✏️ Edit Profile
//             </button>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500 transition"
//             >
//               🔓 Logout
//             </button>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
//           <div className="bg-gray-100 p-4 rounded-lg text-center">
//             <p className="text-gray-500 text-sm">Total Emissions</p>
//             <h3 className="text-xl font-bold text-green-700">
//               {user.totalEmission} kg CO₂
//             </h3>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-lg text-center">
//             <p className="text-gray-500 text-sm">Avg/Day</p>
//             <h3 className="text-xl font-bold text-blue-700">
//               {user.averageEmission} kg CO₂
//             </h3>
//           </div>
//           <div className="bg-gray-100 p-4 rounded-lg text-center">
//             <p className="text-gray-500 text-sm">Best Day</p>
//             <h3 className="text-xl font-bold text-emerald-700">
//               {user.bestDay} kg CO₂
//             </h3>
//           </div>
//         </div>

//         {/* Achievements */}
//         <div className="mt-8">
//           <h4 className="text-lg font-semibold mb-2">🏅 Achievements</h4>
//           <div className="flex flex-wrap gap-2">
//             <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
//               🌱 Plant-Based Champion
//             </span>
//             <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
//               🚿 Water Saver
//             </span>
//             <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
//               🚌 Clean Commuter
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;
