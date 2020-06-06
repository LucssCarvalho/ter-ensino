const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const getUserProfile = app => async (req, res) => {
  let userId, tokenValid, userProfile, userError

  if (!req.body.token) {
    return res.status(403).send({ error: 'Usuário não autorizado' })
  } else {
    jwt.verify(req.body.token, authSecret, (err, decode) => {
      if (err) return (tokenValid = false)

      userId = decode.id

      return (tokenValid = true)
    })
  }

  if (!tokenValid)
    return res.status(403).send({ error: 'Usuário não autorizado' })

  await app.db
    .select('*')
    .from('users')
    .where('id', '=', userId)
    .then(resp => (userProfile = resp[0]))
    .catch(() => (userError = true))

  if (userError)
    return res
      .status(500)
      .send({ error: 'Algo inesperado ocorreu por favor tente novamente.' })

  delete userProfile.id
  delete userProfile.password

  return res.send({ ...userProfile })
}

module.exports = { getUserProfile }
