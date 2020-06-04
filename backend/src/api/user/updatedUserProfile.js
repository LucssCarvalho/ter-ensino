const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const updatedUserProfile = app => async (req, res) => {
  let userId, updatedUser, updatedError
  const userInformation = {}

  if (!req.body.name) {
    return res
      .status(400)
      .send({ error: 'Nome não informado, o campo é obrigatório' })
  } else {
    userInformation.name = req.body.name
  }
  if (req.body.imageURL) userInformation.imageURL = req.body.imageURL
  if (req.body.title) userInformation.title = req.body.title
  if (req.body.about) userInformation.about = req.body.about

  if (!req.body.token) {
    return res.status(503).send({ error: 'Token não está presente' })
  } else {
    jwt.verify(req.body.token, authSecret, (err, decode) => {
      if (err) return (userId = null)

      return (userId = decode.id)
    })
  }

  await app
    .db('users')
    .where('id', '=', userId)
    .update({ ...userInformation })
    .then(() => {
      return app.db
        .select('*')
        .from('users')
        .where('id', '=', userId)
        .then(user => (updatedUser = user[0]))
    })
    .catch(() => (updatedError = true))

  if (updatedError)
    return res
      .status(500)
      .send({ error: 'Algo inesperado ocorreu por favor tente novamente.' })

  delete updatedUser.id
  delete updatedUser.password

  return res.send({ ...updatedUser })
}

module.exports = { updatedUserProfile }
