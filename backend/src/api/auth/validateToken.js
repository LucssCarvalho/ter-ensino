const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const validateToken = (req, res) => {
  const token = req.body.token || null

  if (token) {
    jwt.verify(token, authSecret, (err, decoded) => {
      return res.send({ valid: !err })
    })
  }
}

module.exports = { validateToken }
