import { createTRPCReact } from "@trpc/react-query";
// Hover over AppRouter to see the type of your API,
// comingfrom server code to client code
import { type AppRouter } from "@/server";
export const trpc = createTRPCReact<AppRouter>();
