import { router, publicProcedure } from "@/server/trpc/trpc";
import { todoRouter } from "./routes/todo";
import { userDataRouter } from "./routes/userdata"; // import userDataRouter

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "OK";
  }),
  todos: todoRouter,
  userData: userDataRouter,
});

export type AppRouter = typeof appRouter;
