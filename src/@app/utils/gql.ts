import { gql } from "@apollo/client";

export const ME = gql`
  query ME {
    me {
      id
      name
      email
      createdAt
      role
      posts {
        id
        title
        updatedAt
        createdAt
      }
    }
  }
`;

export const LINKS = gql`
  query LINKS {
    links {
      title
      id
      description
      url
      category
      imageUrl
      users
    }
  }
`;

export const LOGIN = gql`
  mutation LOGIN($input: LoginInput) {
    login(input: $input) {
      accessToken
      userRole
    }
  }
`;

export const REGISTER = gql`
  mutation REGISTER($input: UserInput) {
    addUser(input: $input)
  }
`;

export const AUTHOR_LIST = gql`
  query AUTHOR_LIST {
    authorList {
      id
      name
      email
      createdAt
      role
    }
  }
`;

export const POST_LIST = gql`
  query POST_LIST($input: postListInput) {
    postFullList(input: $input) {
      id
      tags
      title
      approved
      createdAt
      updatedAt
      description
      User {
        name
        email
        createdAt
      }
    }
  }
`;
