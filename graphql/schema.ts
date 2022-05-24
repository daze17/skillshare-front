import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date

  type Login {
    accessToken: String
    userRole: String
  }
  type User {
    id: String
    name: String
    email: String
    createdAt: Date
    password: String
    role: String
    posts: [Post]
  }
  type Post {
    id: String
    title: String
    tags: [String]
    approved: Boolean
    createdAt: Date
    updatedAt: Date
    description: String
    User: User
  }
  input CommentsInput {
    questionId: Int
  }
  input UserInput {
    name: String
    email: String
    password: String
  }
  input LoginInput {
    email: String!
    password: String!
  }
  input PostInput {
    title: String
    tags: [String]
    description: String
  }
  input postListInput {
    approved: Boolean!
  }
  input postDetailInput{
    postId: String
  }
  
  type Mutation {
    addUser(input: UserInput): Boolean
    login(input: LoginInput): Login
    addPost(input: PostInput): Post
    approvePost(input: postDetailInput): Boolean
  }
  type Query {
    me: User
    authorList: [User]
    postFullList(input: postListInput): [Post]
    postDetail(input: postDetailInput): Post
  }
`;
