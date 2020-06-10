const jwt = require('jsonwebtoken')

const { validateArticle } = require('./util/validateArticle')
const { formatDate } = require('./util/formatDate')

const createNewArticle = app => async (req, res) => {
  let userId, tokenValid

  const validate = validateArticle({ ...req.body })

  if (validate) return res.status(400).send(validate)

  if (!req.headers['authorization'])
    return res.status(403).send({ error: 'Usuário não autorizado' })

  const token = req.headers['authorization']

  jwt.verify(token, process.env.AUTH_SECRET, (err, decode) => {
    if (err) return (tokenValid = false)

    userId = decode.id

    return (tokenValid = true)
  })

  if (!tokenValid)
    return res.status(403).send({ error: 'Usuário não autorizado' })

  const article = {
    title: req.body.title,
    imageURL: req.body.imageURL || null,
    content: req.body.content,
    category: req.body.category,
    userId: userId,
    createAt: formatDate(new Date()),
  }

  return app
    .db('articles')
    .insert({ ...article })
    .then(() => res.send({ message: 'Artigo publicado com sucesso!' }))
    .catch(err =>
      res
        .status(500)
        .send({ error: 'Algo inesperado ocorreu por favor tente novamente.' })
    )
}

module.exports = { createNewArticle }
