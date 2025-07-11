import express from "express";
const router = express.Router();
import { Signup, Login } from "../controllers/authController.js";
//Post /api/auth/login
router.post("/login", Login);
//Post /api/auth/signup
router.post("/signup", Signup);
export default router;
