import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { connectDB } from "../config/db";
import Campaign from "../models/Campaign";

// Create instance of tRPC router
export const appRouter = router({
  getCampaign: publicProcedure
    .input(z.string()) // Expect a string (campaignId) as input
    .query(async ({ input }) => {
      await connectDB();
      const campaign = await Campaign.findById(input);
      if (!campaign) throw new Error("Campaign not found");
      return campaign;
    }),
});

// Export type definition of API
export type AppRouter = typeof appRouter;
