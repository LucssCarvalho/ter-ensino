const bcrypt = require('bcrypt')

const validatedInformations = require('./utils/validatedInformations')

const signup = app => async (req, res) => {
  const { name, email, password, confirmPassword } = req.body

  const errorUser = validatedInformations(
    { name, email, password, confirmPassword },
    'signup'
  )

  if (errorUser) return res.status(400).send(errorUser)

  const [id] = await app.db('users').select('*').where('email', '=', email)

  if (!id) {
    const passwordHash = await bcrypt.hash(password, 8)

    app
      .db('users')
      .insert({ name: name, email: email, password: passwordHash })
      .then(() => res.send({ message: 'Cadastro realizado com sucesso' }))
      .catch(err =>
        res.status(500).send({
          error: 'Algo inesperado ocorreu por favor tente novamente.',
        })
      )
  } else {
    res.status(400).send({
      error: 'Usuário já cadastrado',
    })
  }
}

module.exports = { signup }
