import React from "react";

import { Routes, Route } from "react-router-dom";
import { EmissionProvider } from "./context/EmissionContext";
import AboutPage from "./pages/AboutPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import AddActivityPage from "./pages/AddActivityPage";
import PrivateRoute from "./route/privateRoute";
import { UserProvider } from "./context/userContext";
function App() {
  return (
    <div>
      <UserProvider>
        <EmissionProvider>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/addactivity"
              element={
                <PrivateRoute>
                  <AddActivityPage />
                </PrivateRoute>
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
          </Routes>
        </EmissionProvider>
      </UserProvider>
    </div>
  );
}
export default App;
