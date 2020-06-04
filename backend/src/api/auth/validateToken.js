const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const validateToken = (req, res, next) => {
  if (req.body.token) {
    jwt.verify(req.body.token, authSecret, (err, decoded) => {
      if (err) return res.status(403).send({ error: 'Usuário não autorizado' })

      return next()
    })
  } else {
    return res.status(403).send({ error: 'Usuário não autorizado' })
  }
}

module.exports = { validateToken }
