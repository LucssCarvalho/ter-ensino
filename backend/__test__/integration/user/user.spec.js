//Usado para enviar requisição http
const request = require('supertest')

const app = require('../../../src/config/app')

describe('User', () => {
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

  ///////////////Updated User/////////////////////////

  it('should be able to updated user', () => {
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
              .put('/user')
              .send({
                name: 'Ana Paula',
                imageURL:
                  'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                title: 'Programador Full Stack Node.js',
                about:
                  'Sou programadora na empresa terEnsino e evangelizador do gitHub',
                token: response.body.token,
              })
              .then(response => expect(response.body).toHaveProperty('name'))
          )
      )
  })

  it('should not be able to updated user', () => {
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
              .put('/user')
              .send({
                name: 'Ana Paula',
                imageURL:
                  'https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg-1024x683.jpg',
                title: 'Programador Full Stack Node.js',
                about:
                  'Sou programadora na empresa terEnsino e evangelizador do gitHub',
              })
              .then(response => expect(response.body).toHaveProperty('error'))
          )
      )
  })
})
