import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
//Enable cors
app.use(cors());
//Middleware to parse JSON
app.use(express.json());
const PORT = process.env.PORT || 5000;
//Import our routes
import authRoute from "./routes/authRoute.js";
import emissionRoute from "./routes/emissionsRoute.js";
//Imported now we use these routes
app.use("/api/auth", authRoute);
app.use("/api/emission", emissionRoute);
//Connecting to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  //If connectede then
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  //if not connected
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
