// server/api/routes/userData.ts
import { router, publicProcedure } from "@/server/trpc/trpc";
import prisma from "@/server/db/prisma";
import { z } from "zod";
import { UpdateUserData } from "./../../../types/types";

const geoSchema = z.object({
  lat: z.string().optional(),
  lng: z.string().optional(),
});

const addressSchema = z.object({
  street: z.string().optional(),
  suite: z.string().optional(),
  city: z.string().optional(),
  zipcode: z.string().optional(),
  geo: geoSchema.optional(),
});

const companySchema = z.object({
  catchPhrase: z.string().optional(),
  bs: z.string().optional(),
  name: z.string().optional(),
});

const createUserDataSchema = z.object({
  name: z.string(),
  username: z.string().optional(),
  email: z.string(),
  address: addressSchema.optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  avatar: z.string().optional(),
  company: companySchema.optional(),
});

const updateUserDataSchema = z.object({
  id: z.number(),
  name: z.string().optional(),
  username: z.string().optional(),
  email: z.string().optional(),
  address: addressSchema.optional(),
  phone: z.string().optional(),
  website: z.string().optional(),
  avatar: z.string().optional(),
  company: companySchema.optional(),
});

const deleteUserDataSchema = z.object({
  id: z.number(),
});

export const userDataRouter = router({
  getUserData: publicProcedure.query(async () => {
    return await prisma.user.findMany({
      include: {
        address: {
          include: {
            geo: true,
          },
        },
        company: true,
      },
    });
  }),
  createUserData: publicProcedure
    .input(createUserDataSchema)
    .mutation(async ({ input }) => {
      return await prisma.user.create({
        data: {
          name: input.name,
          username: input?.username,
          email: input.email,
          phone: input?.phone,
          website: input?.website,
          avatar: `https://avatars.dicebear.com/api/avataaars/${input.username}.svg`,
          address: {
            create: {
              street: input.address?.street,
              suite: input.address?.suite,
              city: input.address?.city,
              zipcode: input.address?.zipcode,
              geo: {
                create: {
                  lat: input.address?.geo?.lat,
                  lng: input.address?.geo?.lng,
                },
              },
            },
          },
          company: {
            create: {
              name: input.company?.name,
              catchPhrase: input.company?.catchPhrase,
              bs: input.company?.bs,
            },
          },
        },
      });
    }),
  updateUserData: publicProcedure
    .input(updateUserDataSchema)
    .mutation(async ({ input }) => {
      const { id, ...data } = input as UpdateUserData;
      return await prisma.user.update({
        where: { id },
        data: {
          ...data,
          address: data.address && {
            update: {
              ...data.address,
              geo: data.address.geo && {
                update: data.address.geo,
              },
            },
          },
          company: data.company && {
            update: data.company,
          },
        },
      });
    }),
  deleteUserData: publicProcedure
    .input(deleteUserDataSchema)
    .mutation(async ({ input }) => {
      return await prisma.user.delete({ where: { id: input.id } });
    }),
});
