const jwt = require('jsonwebtoken')

const updatedUserProfile = app => async (req, res) => {
  let userId, updatedUser, updatedError, tokenValid
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

  if (!req.headers['authorization']) {
    return res.status(403).send({ error: 'Usuário não autorizado' })
  } else {
    const token = req.headers['authorization']
    jwt.verify(token, process.env.AUTH_SECRET, (err, decode) => {
      if (err) return (tokenValid = false)

      userId = decode.id

      return (tokenValid = true)
    })
  }

  if (!tokenValid)
    return res.status(403).send({ error: 'Usuário não autorizado' })

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
