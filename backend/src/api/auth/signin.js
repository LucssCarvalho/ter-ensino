const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')
const validatedInformations = require('./utils/validatedInformations')

const signin = app => async (req, res) => {
  const { email, password } = req.body

  const errorUser = validatedInformations({ email, password })

  if (errorUser) res.status(400).send(errorUser)

  let user = await app.db('users').select('*').where('email', '=', email)

  if (!user[0]) res.status(400).send({ error: 'E-mail/Senha inválido' })

  const passwordMatch = await bcrypt.compare(password, user[0].password)

  if (!passwordMatch) res.status(400).send({ error: 'E-mail/Senha inválido' })

  const payload = {
    id: user[0].id,
    email: user[0].email,
  }

  const token = jwt.sign(payload, authSecret, { expiresIn: '7d' })

  delete user[0].id
  delete user[0].password

  res.send({ ...user[0], token })
}

module.exports = { signin }
