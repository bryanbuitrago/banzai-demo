import { time } from "console";
import mongoose from "mongoose";
import { string } from "zod";

const CanmpaignSchema = new mongoose.Schema(
  {
    name: string,
    spend: Number,
    clicks: Number,
    conversions: Number,
  },
  { timestamps: true }
);
export default mongoose.models.Campaign ||
  mongoose.model("Campaign", CanmpaignSchema);
