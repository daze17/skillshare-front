import prisma from "../lib/prisma";
import { testLink, getUserDetail } from "./resolvers/queries";
import {
  addUserMutation,
  loginMutation,
  // addPostMutation,
  
} from "./resolvers/mutations";

export const resolvers = {
  Mutation: {
    addUser: async (_: any, { input }: any) => addUserMutation(input),
    login: async (_: any, { input }: any) => loginMutation(input),
    // addQuestion: async (_: any, { input }: any, context: any) =>
    //   addPostMutation(input, context),
  },
  Query: {
    me: async (_: any, {}, context: any) => getUserDetail(context),
    links: async (_: any, { input }: any, context: any) =>
      testLink(input, context),
  },
};
