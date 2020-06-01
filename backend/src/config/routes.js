module.exports = app => {
  app.get('/', (req, res) => {
    res.send({ teste: 'teste' }).json()
  })
}
