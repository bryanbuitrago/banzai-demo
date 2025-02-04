import { publicProcedure, router } from "./trpc";

// Create instance of tRPC router
// Add proceures (functions) to router
export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [10, 20, 30];
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

// export const appRouter = router({
//   getCampaigns: publicProcedure.query(async () => {
//     const res = await fetch("http://localhost:3000/api/campaigns");
//     return res.json();
//   }),
// });
