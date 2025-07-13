import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Environment variable validation
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ Error: MONGO_URI is not defined in environment variables");
  console.error("Please create a .env file with MONGO_URI=mongodb://localhost:27017/carbonprint");
  process.exit(1);
}

// Import routes
import authRoute from "./routes/authRoute.js";
import emissionRoute from "./routes/emissionsRoute.js";

// Use routes
app.use("/api/auth", authRoute);
app.use("/api/emission", emissionRoute);

// Basic health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "CarbonPrint Backend API is running!" });
});

// Connect to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB:", err.message);
    process.exit(1);
  });

// Handle graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
