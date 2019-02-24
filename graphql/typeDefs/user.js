const { gql } = require('apollo-server-express')

const user = gql`
  type User {
    id: String!
    username: String!
    createAt: String!
    updateAt: String!
  }

  extend type Query {
    users: [User]!
  }

  extend type Mutation {
    registerUser(
      username: String!
      password: String!
      confirmPassword: String!
    ): User!
  }
`

module.exports = user
