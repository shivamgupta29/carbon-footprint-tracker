import React, { useEffect, useState } from "react";
import Dashboard from "../components/home/Dashboard";
import Sidebar from "../components/home/Sidebar";
import { Link } from "react-router-dom";
import { useEmission } from "../context/EmissionContext";

const Home = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const { error } = useEmission();

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 600;
      setShowMobileSidebar(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mx-4 mt-4">
          {error}
        </div>
      )}

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to CarbonPrint</h1>
          <p className="text-green-100 text-lg">Track your carbon footprint and make a positive impact on the environment</p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Main Dashboard */}
        <div className="flex-1 p-4 md:p-6">
          <Dashboard />
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-80 bg-white border-l border-gray-200">
          <div className="sticky top-20">
            <Sidebar />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 text-center text-sm text-gray-600 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <p className="mb-2">© 2025 CarbonPrint. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-green-600 hover:text-green-800 transition-colors">
              About
            </Link>
            <Link to="/addactivity" className="text-green-600 hover:text-green-800 transition-colors">
              Add Activity
            </Link>
            <Link to="/profile" className="text-green-600 hover:text-green-800 transition-colors">
              Profile
            </Link>
          </div>
        </div>
      </footer>

      {/* Mobile Sidebar */}
      {showMobileSidebar && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg lg:hidden z-40">
          <div className="max-h-64 overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
