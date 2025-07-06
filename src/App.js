import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddActivityPage from "./pages/AddActivityPage";
import { EmissionProvider } from "./context/EmissionContext";
import ProfilePage from "./pages/ProfilePage";
import AboutPage from "./pages/AboutPage";
function App() {
  return (
    <EmissionProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/addactivity" element={<AddActivityPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </EmissionProvider>
  );
}

export default App;
