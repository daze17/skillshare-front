import prisma from "../lib/prisma";

export const resolvers = {
  Query: {
    links: async (_: any, { input }: any) => await prisma.link.findMany(),
  },
};
