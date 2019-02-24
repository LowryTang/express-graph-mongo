const models = require('../../models')
const resolvers = {
  Query: {
    users () {
      return models.User.find()
    }
  },
  Mutation: {
    registerUser (parent, user) {
      return models.User.create(user).then(user => {
        return user
      })
    }
  },
  User: {

  }
}

module.exports = resolvers;
