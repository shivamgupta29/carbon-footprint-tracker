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
    electricityDetails: { type: Object, default: {} },
    waterDetails: { type: Object, default: {} },
    transportDetails: { type: Object, default: {} },
    foodDetails: { type: Object, default: {} },
    lpgDetails: { type: Object, default: {} },
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
