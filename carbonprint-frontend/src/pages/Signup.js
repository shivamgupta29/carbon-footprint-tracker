// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// const bcrypt = require("bcryptjs");

// const Signup = () => {
//   const [form, setForm] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//   });
//   const [err, setErr] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   router.post("/signup", async (req, res) => {
//     const { firstname, lastname, email, password } = req.body;

//     try {
//       // check if user exists
//       const existingUser = await User.findOne({ email });
//       if (existingUser)
//         return res.status(400).json({ error: "User already exists" });

//       // hash the password
//       const saltRounds = 10;
//       const hashedPassword = await bcrypt.hash(password, saltRounds);

//       // save the user with hashed password
//       const newUser = new User({
//         firstname,
//         lastname,
//         email,
//         password: hashedPassword,
//       });

//       await newUser.save();

//       res.status(201).json({ message: "User created successfully" });
//     } catch (err) {
//       console.error("Signup error:", err);
//       res.status(500).json({ error: "Server error" });
//     }
//   });
//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col">
//       <div className="bg-green-600 py-4 px-6 text-white text-xl font-bold shadow">
//         CarbonPrint 🌱
//       </div>

//       <div className="flex flex-1 items-center justify-center px-4">
//         <div className="w-full max-w-lg bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
//           <h2 className="text-3xl font-bold mb-1 text-center text-gray-800">
//             Create an account
//           </h2>
//           <p className="text-sm text-gray-500 text-center mb-6">
//             Already have an account?{" "}
//             <a
//               href="/login"
//               className="text-green-600 hover:underline font-medium"
//             >
//               Log in
//             </a>
//           </p>
//           {err && (
//             <p className="text-red-500 text-sm mb-4 text-center">{err}</p>
//           )}
//           <form className="space-y-4" onSubmit={handleSignup}>
//             <div className="flex gap-4">
//               <input
//                 name="firstname"
//                 placeholder="First Name"
//                 className="w-1/2 p-3 border rounded-md focus:ring-green-500"
//                 onChange={handleChange}
//                 value={form.firstname}
//               />
//               <input
//                 name="lastname"
//                 placeholder="Last Name"
//                 className="w-1/2 p-3 border rounded-md focus:ring-green-500"
//                 onChange={handleChange}
//                 value={form.lastname}
//               />
//             </div>
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 border rounded-md focus:ring-green-500"
//               onChange={handleChange}
//               value={form.email}
//             />
//             <input
//               name="password"
//               type="password"
//               placeholder="Password"
//               className="w-full p-3 border rounded-md focus:ring-green-500"
//               onChange={handleChange}
//               value={form.password}
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-semibold"
//             >
//               Sign up
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
