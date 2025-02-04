// Initialize tRPC server
// return router and publicProcedure

import { initTRPC } from "@trpc/server";
import z from "zod";
import Campaign from "../models/Campaign";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// export const appRouter = t.router({
//   getCampaigns: t.procedure.query(async () => {
//     return await Campaign.find();
//   }),

//   addCampaign: t.procedure
//     .input(
//       z.object({
//         name: z.string(),
//         spend: z.number(),
//         clicks: z.number(),
//         conversions: z.number(),
//       })
//     )
//     .mutation(async ({ input }) => {
//       return await Campaign.create(input);
//     }),
// });

// export type AppRouter = typeof appRouter;
