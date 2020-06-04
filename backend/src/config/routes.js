const { signup } = require('../api/auth/signup')
const { signin } = require('../api/auth/signin')
const { validateToken } = require('../api/auth/validateToken')
const { updatedUserProfile } = require('../api/user/updatedUserProfile')
const { createNewArticle } = require('../api/articles/createNewArticle')
const { getArticles } = require('../api/articles/getArticles')
const { updatedArticle } = require('../api/articles/updatedArticle')
const { deleteArticle } = require('../api/articles/deleteArticle')

module.exports = app => {
  //Open Api
  app.post('/signup', signup(app))

  app.post('/signin', signin(app))

  //Private Api
  app.get('/articles', getArticles(app))

  app.use(validateToken)

  app.put('/user', updatedUserProfile(app))

  app.post('/articles', createNewArticle(app))

  app.put('/articles/:id', updatedArticle(app))

  app.delete('/articles/:id', deleteArticle(app))
}
