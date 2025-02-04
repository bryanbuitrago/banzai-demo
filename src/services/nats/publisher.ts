import { connect, StringCodec } from "nats";

const sc = StringCodec();

async function publishEvent() {
  const nc = await connect({ servers: "localhost:4222" });

  // Simulated campaign event
  const campaignUpdate = {
    campaignId: "123",
    spend: Math.random() * 100,
    conversions: Math.floor(Math.random() * 10),
  };

  nc.publish("campaign.updates", sc.encode(JSON.stringify(campaignUpdate)));
  console.log("Published:", campaignUpdate);

  nc.close();
}

// Send an update every 5 seconds
setInterval(publishEvent, 5000);
