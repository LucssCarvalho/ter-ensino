//Usado para enviar requisição http
const request = require('supertest')

const app = require('../../../src/config/app')

describe('Articles', () => {
  beforeEach(() => {
    //desfaz todas as alterações das migrates anteriores
    //Executa as migrates
    return app.db.migrate.rollback().then(() => app.db.migrate.latest())
  })

  afterAll(() => {
    //Encerra a conexão
    app.db.destroy().then(() => {
      return
    })
  })

  ///////////////Create new Article//////////////////////////

  it('should be able to create new article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan1@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan1@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
                token: response.body.token,
              })
              .then(response => expect(response.body).toHaveProperty('message'))
          )
      )
  })

  it('should not be able to create new article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan1@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan1@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .send({
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
                token: response.body.token,
              })
              .then(response => expect(response.body).toHaveProperty('error'))
          )
      )
  })

  /////////////////Get All Articles///////////////////////////

  it('should be able to get all articles', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan1@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan1@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .send({
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
                token: response.body.token,
              })
              .then(() =>
                request(app)
                  .get('/articles')
                  .then(response =>
                    expect(response.body).toHaveProperty('articles')
                  )
              )
          )
      )
  })
})
