module.exports = (schema) => {
  schema.add({
    createAt: { type: Date, default: Date.now() },
    updateAt: { type: Date, default: Date.now() }
  })

  schema.pre('save', next => {
    this.updateAt = Date.now()
    next()
  })
}
