const { signup } = require('../api/auth/signup')
const { signin } = require('../api/auth/signin')
const { validateToken } = require('../api/auth/validateToken')

module.exports = app => {
  //Open Api
  app.post('/signup', signup(app))

  app.post('/signin', signin(app))

  app.post('/validateToken', validateToken)

  //Private Api
}
