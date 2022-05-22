import { gql } from "@apollo/client";

export const ME = gql`
  query ME {
    me {
      id
      name
      email
      createdAt
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
    }
  }
`;

export const REGISTER = gql`
  mutation REGISTER($input: UserInput) {
    addUser(input: $input)
  }
`;
