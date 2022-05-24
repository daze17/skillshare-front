import {
  authorListQuery,
  getUserDetail,
  postFullListQuery,
  postDetailQuery,
} from "./resolvers/queries";
import {
  addUserMutation,
  loginMutation,
  addPostMutation,
  approvePostMutation,
} from "./resolvers/mutations";

export const resolvers = {
  Mutation: {
    addUser: async (_: any, { input }: any) => addUserMutation(input),
    login: async (_: any, { input }: any) => loginMutation(input),
    addPost: async (_: any, { input }: any, context: any) =>
      addPostMutation(input, context),
    approvePost: async (_: any, { input }: any) => {
      approvePostMutation(input);
    },
  },
  Query: {
    me: async (_: any, {}, context: any) => getUserDetail(context),
    authorList: async (_: any) => authorListQuery(),
    postFullList: async (_: any, { input }: any) => postFullListQuery(input),
    postDetail: async (_: any, { input }: any) => postDetailQuery(input),
  },
};
