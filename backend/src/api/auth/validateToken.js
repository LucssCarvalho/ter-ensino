const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const validateToken = (req, res) => {
  if (req.body.token) {
    jwt.verify(req.body.token, authSecret, (err, decoded) => {
      if (err) return res.send({ valid: false })

      return res.send({ valid: true })
    })
  } else {
    return res.send({ valid: false })
  }
}

module.exports = { validateToken }
