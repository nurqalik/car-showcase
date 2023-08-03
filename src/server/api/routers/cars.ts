import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const carRouter = createTRPCRouter({
  getAllCar: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.car.findMany();
  }),
  getOneCar: publicProcedure.input(z.string()).query(async ({ input, ctx }) => {
    const car = await ctx.prisma.car.findUnique({
      where: {
        id: input,
      },
    });
    return car;
  }),
});
