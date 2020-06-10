const jwt = require('jsonwebtoken')

const validateToken = (req, res) => {
  if (req.headers['authorization']) {
    const token = req.headers['authorization']
    jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
      if (err) return res.send({ valid: false })

      return res.send({ valid: true })
    })
  } else {
    return res.send({ valid: false })
  }
}

module.exports = { validateToken }
