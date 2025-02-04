import { connect, StringCodec } from "nats";
import mongoose from "mongoose";
import Campaign from "./src/app/models/Campaign";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/banzai";
mongoose.connect(MONGODB_URI);

async function listenForEvents() {
  const nc = await connect({ servers: "nats://nats:4222" });
  const sc = StringCodec();
  const sub = nc.subscribe("campaign.events");

  console.log("Listening for campaign updates (2025)...");

  for await (const msg of sub) {
    const data = JSON.parse(sc.decode(msg.data));
    console.log("Received Event:", data);
    await Campaign.findByIdAndUpdate(
      data.campaignId,
      { $inc: { [data.type]: data.value } },
      { upsert: true }
    );
  }
}

listenForEvents();
