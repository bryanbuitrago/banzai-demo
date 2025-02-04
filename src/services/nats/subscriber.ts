import { connect, StringCodec } from "nats";
import mongoose from "mongoose";
import Campaign from "@/models/Campaign";

const sc = StringCodec();

async function listenForUpdates() {
  await mongoose.connect("mongodb://localhost:27017/banzai");

  const nc = await connect({ servers: "localhost:4222" });
  const sub = nc.subscribe("campaign.updates");

  console.log("Listening for campaign updates...");

  for await (const msg of sub) {
    const data = JSON.parse(sc.decode(msg.data));
    console.log("Received Update:", data);

    // Update MongoDB
    await Campaign.findByIdAndUpdate(
      data.campaignId,
      { $inc: { spend: data.spend, conversions: data.conversions } },
      { upsert: true, new: true }
    );
  }
}

listenForUpdates();
