const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const { validateArticle } = require('./util/validateArticle')
const { formatDate } = require('./util/formatDate')

const createNewArticle = app => async (req, res) => {
  let userId

  const validate = validateArticle({ ...req.body })

  if (validate) return res.status(400).send(validate)

  if (!req.body.token)
    return res.status(403).send({ error: 'Token não está presente' })

  jwt.verify(req.body.token, authSecret, (err, decode) => (userId = decode.id))

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
