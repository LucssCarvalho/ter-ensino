const { signup } = require('../api/auth/signup')
const { signin } = require('../api/auth/signin')
const { validateToken } = require('../api/auth/validateToken')
const { updatedUserProfile } = require('../api/user/updatedUserProfile')
const { createNewArticle } = require('../api/articles/createNewArticle')
const { getArticles } = require('../api/articles/getArticles')

module.exports = app => {
  //Open Api
  app.post('/signup', signup(app))

  app.post('/signin', signin(app))

  app.post('/validateToken', validateToken)

  //Private Api
  app.put('/user', updatedUserProfile(app))

  app.post('/articles', createNewArticle(app))

  app.get('/articles', getArticles(app))
}
