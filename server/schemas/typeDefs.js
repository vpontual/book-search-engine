const { gql } = require("apollo-server-express");

// Defining the GraphQL schema
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me(userId: ID!): User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(
      authors: [String]!
      description: String!
      title: String!
      bookId: String!
      image: String!
      link: String
      userId: String
    ): User
    removeBook(bookId: String!, userId: String!): User
  }
`;

module.exports = typeDefs;
