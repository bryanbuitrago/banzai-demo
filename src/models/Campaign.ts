import mongoose from "mongoose";

const CampaignSchema = new mongoose.Schema({
  _id: String, // Use campaignId as _id
  spend: { type: Number, default: 0 },
  conversions: { type: Number, default: 0 },
});

const Campaign =
  mongoose.models.Campaign || mongoose.model("Campaign", CampaignSchema);
export default Campaign;
