import { router, publicProcedure } from "@/server/trpc/trpc";
import { todoRouter } from "./routes/todo";
//import { userRouter } from "./routes/user"; // import userRouter
import { userDataRouter } from "./routes/userdata"; // import userDataRouter

export const appRouter = router({
  healthcheck: publicProcedure.query(() => {
    return "OK";
  }),
  todos: todoRouter,
  users: userRouter, // add userRouter to appRouter
  userData: userDataRouter,
});

export type AppRouter = typeof appRouter;
