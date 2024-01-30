// server/api/routes/user.ts
import { router, publicProcedure } from "@/server/trpc/trpc";
import prisma from "@/server/db/prisma";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().optional(),
  avatar: z.string().optional(),
});

const updateUserSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  email: z.string().optional(),
  password: z.string().optional(),
  avatar: z.string().optional(),
});

const deleteUserSchema = z.object({
  id: z.number(),
});

export const userRouter = router({
  getUsers: publicProcedure.query(async () => {
    return await prisma.user.findMany();
  }),
  createUser: publicProcedure
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      return await prisma.user.create({ data: input });
    }),
  updateUser: publicProcedure
    .input(updateUserSchema)
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return await prisma.user.update({ where: { id }, data });
    }),
  deleteUser: publicProcedure
    .input(deleteUserSchema)
    .mutation(async ({ input }) => {
      return await prisma.user.delete({ where: { id: input.id } });
    }),
});
