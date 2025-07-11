// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setErr("");

//     try {
//       const res = await axios.post("/api/users/login", form);

//       // Save user data in localStorage
//       localStorage.setItem("user", JSON.stringify(res.data));

//       navigate("/profile"); // redirect after login
//     } catch (error) {
//       setErr(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <div className="bg-green-600 py-4 px-6 text-white text-xl font-bold shadow">
//         CarbonPrint 🌱
//       </div>

//       <div className="flex flex-1 items-center justify-center px-4">
//         <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl border border-gray-200">
//           <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
//             Log In
//           </h2>
//           <p className="text-sm text-gray-500 text-center mb-6">
//             Don't have an account?{" "}
//             <a
//               href="/signup"
//               className="text-green-600 hover:underline font-medium"
//             >
//               Sign up
//             </a>
//           </p>

//           {err && (
//             <p className="text-red-500 text-sm text-center mb-4">{err}</p>
//           )}

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               onChange={handleChange}
//               value={form.email}
//             />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//               onChange={handleChange}
//               value={form.password}
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-green-600 hover:bg-green-700 transition text-white rounded-md font-semibold"
//             >
//               Log In
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
