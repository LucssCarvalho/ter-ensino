const jwt = require('jsonwebtoken')

const deleteArticle = app => async (req, res) => {
  let userId, tokenValid

  if (!req.params.id)
    return res.status(400).send({ error: 'Id do artigo não informado.' })

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

  return app.db
    .select('*')
    .from('articles')
    .where('id', '=', req.params.id)
    .then(response => {
      if (response[0].userId !== userId)
        return res
          .status(403)
          .send({ error: 'Usuário não está autorizado a excluir esse artigo' })
      return app
        .db('articles')
        .where('id', '=', req.params.id)
        .del()
        .then(() => res.send({ message: 'Artigo excluido com sucesso!' }))
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

module.exports = { deleteArticle }
