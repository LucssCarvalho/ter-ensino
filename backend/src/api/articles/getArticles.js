const { formatDateStr } = require('./util/formatDate')

const getArticles = app => async (req, res) => {
  const listArticles = await app.db.select('*').from('articles')
  const listUsers = await app.db.select('*').from('users')

  const articles = listArticles.map(article => {
    const author = listUsers.filter(user => user.id === article.userId)
    article.author = { name: author[0].name, imageURL: author[0].imageURL }
    article.dateArticle = formatDateStr(article.createAt)
    delete article.userId

    return article
  })

  return res.send({ articles })
}
module.exports = { getArticles }
