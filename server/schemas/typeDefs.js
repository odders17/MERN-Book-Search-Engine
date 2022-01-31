const { gql } = require('apollo-server-express');

const typeDefs = gql`
  input BookToSave {
    bookId: String!
    authors: [String]
    description: String
    image: String
    link: String
    bookCount: Int
    title: String!
}

  type Book {
    bookId: String!
    authors: [String]!
    description: String!
    image: String
    link: String
    title: String!
  }

  type User {
    _id: ID!
    email: String!
    username: String!
    savedBooks: [Book]
  }

  type Auth {
    token: String!
    user: User!
  }
 
  type Query {
    me: User
  }

  type Mutation {
    addUser(email: String!, password: String!, username: String!): Auth
    saveBook(book: BookToSave!): User
    removeBook(bookId: String!) : User
    login(email: String!, password: String!) : Auth
  }
`;

module.exports = typeDefs;