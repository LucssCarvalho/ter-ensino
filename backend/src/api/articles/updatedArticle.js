const jwt = require('jsonwebtoken')

const { authSecret } = require('../../../.env')

const { validateArticle } = require('./util/validateArticle')

const updatedArticle = app => async (req, res) => {
  let userId, tokenValid

  if (!req.params.id)
    return res.status(400).send({ error: 'Id do artigo não informado.' })

  const validate = validateArticle({ ...req.body })
  if (validate) return res.status(400).send(validate)

  if (!req.body.token)
    return res.status(403).send({ error: 'Usuário não autorizado' })

  jwt.verify(req.body.token, authSecret, (err, decode) => {
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
  }

  return app.db
    .select('*')
    .from('articles')
    .where('id', '=', req.params.id)
    .then(response => {
      if (response[0].userId !== userId)
        return res
          .status(403)
          .send({ error: 'Usuário não está autorizado a editar esse artigo' })
      return app
        .db('articles')
        .where('id', '=', req.params.id)
        .update({ ...article })
        .then(() => res.send({ message: 'Artigo atualizado com sucesso!' }))
        .catch(err =>
          res.status(500).send({
            error: 'Algo inesperado ocorreu por favor tente novamente.',
          })
        )
    })
    .catch(err =>
      res
        .status(500)
        .send({ error: 'Algo inesperado ocorreu por favor tente novamente.' })
    )
}

module.exports = { updatedArticle }
