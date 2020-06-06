//Usado para enviar requisição http
const request = require('supertest')

const app = require('../../../src/config/app')

describe('Authentication', () => {
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

  //////////////////Create User////////////////////////

  it('should be able to create a new user', () => {
    //Parametro do resquest é o app
    //.post o metodo que queremos usar para requisição
    //.send: dados que serão enviados na requisição
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(response =>
        //Expect: é o que eu estou recebendo
        expect(response.body).toHaveProperty('message')
      )
  })

  it('should not be able to create a new user', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan@gmail.com',
        password: 'J@nathan123',
      })
      .then(response =>
        //Expect: é o que eu estou recebendo
        expect(response.body).toHaveProperty('error')
      )
  })

  //////////////////Login User////////////////////////

  it('should be able to login of user', () => {
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
            //Expect: é o que eu estou recebendo
            expect(response.body).toHaveProperty('token')
          )
      )
  })

  it('should not be able to login of user', () => {
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
            password: 'J@nathan',
          })
          .then(response =>
            //Expect: é o que eu estou recebendo
            expect(response.body).toHaveProperty('error')
          )
      )
  })

  //////////////////Validate Token////////////////////////

  it('should be able to validate token', () => {
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
              .post('/validateToken')
              .set('Authorization', response.body.token)
              .then(response => expect(response.body.valid).toBe(true))
          )
      )
  })

  it('should not be able to validate token', () => {
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
              .post('/validateToken')
              // .set('Authorization', response.body.token)
              .then(response => expect(response.body.valid).toBe(false))
          )
      )
  })
})
