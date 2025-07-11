// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import AddActivityPage from "./pages/AddActivityPage";
// import { EmissionProvider } from "./context/EmissionContext";
// import ProfilePage from "./pages/ProfilePage";
// import AboutPage from "./pages/AboutPage";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import PrivateRoute from "./components/PrivateRoute";
// const AppWrapper = () => {
//   const location = useLocation();
//   const hidenav = ["/login", "/signup"];
//   const shouldHidenav = hidenav.includes(location.pathname);
//   return (
//     <>
//       {!shouldHidenav && <Navbar />}
//       <Routes>
//         <Route path="/addactivity" element={<AddActivityPage />} />
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute>
//               <ProfilePage />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </>
//   );
// };
// function App() {
//   return (
//     <EmissionProvider>
//       <Router>
//         <AppWrapper />
//       </Router>
//     </EmissionProvider>
//   );
// }

// export default App;
