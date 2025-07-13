import bcrypt from "bcrypt";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
const Signup = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    //Check if email already exist
    const check = await User.findOne({ email });
    if (check) {
      res.status(400).json({ message: "Email already exists" });
    }
    const saltRounds = 11;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    //Create a new User
    console.log("🟢 Signup - Email:", email);
    console.log("🟢 Signup - Raw password:", password);
    console.log("🟢 Signup - Hashed password:", hashedPassword);

    const newUser = new User({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    //Save the new User to mongoDb
    await newUser.save();
    res.status(201).json({ message: "Signup successfull" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Server error during signup ", error: err.message });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //Check User
    const checkUser = await User.findOne({ email });
    if (!checkUser)
      return res.status(401).json({ message: "Invalid Credentials" });
    //Check Password
    const checkPass = await bcrypt.compare(password, checkUser.password);
    if (!checkPass)
      return res.status(401).json({ message: "Invalid Credentials" });
    //Assign token for use
    console.log("🔵 Login - Email:", email);
    console.log("🔵 Login - Password typed:", password);
    console.log("🔵 Login - Password in DB:", checkUser.password);
    const token = jwt.sign(
      { userId: checkUser._id }, //Payload
      process.env.JWT_SECRET, //Key access hoti hai
      { expiresIn: "1h" } //Session timeout
    );
    res
      .status(201)
      .json({ token, userId: checkUser._id, message: "Login successfull" });
  } catch (err) {
    res.status(500).json({ message: "Login Failed", error: err.message });
  }
};
export { Signup, Login };
