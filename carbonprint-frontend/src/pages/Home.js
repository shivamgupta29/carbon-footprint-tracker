// import React, { useEffect, useState } from "react";
// import Dashboard from "../components/home/Dashboard";
// import Sidebar from "../components/home/Sidebar";
// import { Link } from "react-router-dom";
// const Home = () => {
//   const [showMobileSidebar, setShowMobileSidebar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const threshold = 600;
//       setShowMobileSidebar(window.scrollY > threshold);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-200">
//       {/* Main Content Area */}
//       <div className="flex flex-1">
//         <div className="flex-1 bg-gray-100 p-6">
//           <Dashboard />
//         </div>

//         {/* Desktop Sidebar */}
//         <div className="hidden md:block">
//           <Sidebar />
//         </div>
//       </div>

//       {/* Footer */}
//       <footer className="bg-white text-center text-sm text-gray-500 py-4 shadow-inner">
//         © 2025 CarbonPrint. All rights reserved.
//         <Link to="/about" className="text-green-600 hover:underline">
//           About
//         </Link>
//       </footer>

//       {/* Mobile Sidebar */}
//       {showMobileSidebar && (
//         <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg md:hidden z-50">
//           <Sidebar />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
