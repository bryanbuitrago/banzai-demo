// Initialize tRPC server
// return router and publicProcedure

import { initTRPC } from "@trpc/server";
// import z from "zod";
// import Campaign from "../models/Campaign";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;
