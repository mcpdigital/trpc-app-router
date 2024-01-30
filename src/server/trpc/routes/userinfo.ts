import { router, publicProcedure } from "@/server/trpc/trpc";
import prisma from "@/server/db/prisma";
import { z } from "zod";

const createUserDataSchema = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string(),
  street: z.string(),
  suite: z.string(),
  city: z.string(),
  zipcode: z.string(),
  lat: z.string(),
  lng: z.string(),
  phone: z.string(),
  website: z.string(),
  companyName: z.string(),
  catchPhrase: z.string(),
  bs: z.string(),
});

const updateUserDataSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  street: z.string().optional(),
  suite: z.string().optional(),
  city: z.string().optional(),
  zipcode: z.string().optional(),
  lat: z.string().optional(),
  lng: z.string().optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  companyName: z.string().optional(),
  catchPhrase: z.string().optional(),
  bs: z.string().optional(),
});

const deleteUserDataSchema = z.object({
  id: z.number(),
});

export const userDataRouter = router({
  getUserData: publicProcedure.query(async () => {
    return await prisma.UserData.findMany();
  }),
  createUserData: publicProcedure
    .input(createUserDataSchema)
    .mutation(async ({ input }) => {
      return await prisma.userData.create({ data: input });
    }),
  updateUserData: publicProcedure
    .input(updateUserDataSchema)
    .mutation(async ({ input }) => {
      const { id, ...data } = input;
      return await prisma.userData.update({ where: { id }, data });
    }),
  deleteUserData: publicProcedure
    .input(deleteUserDataSchema)
    .mutation(async ({ input }) => {
      return await prisma.userData.delete({ where: { id: input.id } });
    }),
});
