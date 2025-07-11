import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    date: {
      type: Date,
      default: Date.now,
    },
    electricity: { type: Number, default: 0 },
    water: { type: Number, default: 0 },
    transport: { type: Number, default: 0 },
    food: { type: Number, default: 0 },
    LPG: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    electricityDetails: { type: Object, default: 0 },
    waterDetails: { type: Object, default: 0 },
    transportDetails: { type: Object, default: 0 },
    foodDetails: { type: Object, default: 0 },
    lpgDetails: { type: Object, default: 0 },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
