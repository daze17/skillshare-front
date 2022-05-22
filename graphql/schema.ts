import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  scalar Date

  type Link {
    id: String
    title: String
    description: String
    url: String
    category: String
    imageUrl: String
    users: [String]
  }
  type Login {
    accessToken: String
  }
  type User {
    id: String
    name: String
    email: String
    createdAt: Date
    password: String
    posts: [Post]
  }
  type Post {
    id: Int
    title: String
    tags: [String]
    approved: Boolean
    createdAt: Date
    updatedAt: Date
    description: String
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
  type Mutation {
    addUser(input: UserInput): Boolean
    login(input: LoginInput): Login
  }
  type Query {
    me: User
    links(input: CommentsInput): [Link]!
  }
`;
