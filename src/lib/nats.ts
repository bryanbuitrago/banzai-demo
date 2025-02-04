import { connect, NatsConnection } from "nats";

let nc: NatsConnection | null = null;

export const getNatsConnection = async () => {
  if (!nc) {
    nc = await connect({ servers: "nats://localhost:4222" });
    console.log("Connected to NATS");
  }
  return nc;
};
