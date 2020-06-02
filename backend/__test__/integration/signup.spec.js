const request = require('supertest')

const app = require('../../src/config/app')

describe('Signup', () => {
  beforeEach(async () => {
    //desfaz todas as alterações das migrates anteriores
    await app.db.migrate.rollback()
    //Executa as migrates
    await app.db.migrate.latest()
  })

  afterAll(async () => {
    //Encerra a conexão
    await app.db.destroy()
  })

  it('should be able to create a new user', async () => {
    //Parametro do resquest é o app
    //.post o metodo que queremos usar para requisição
    //.send: dados que serão enviados na requisição
    const response = await request(app).post('/signup').send({
      name: 'Jonathan Raphael',
      email: 'jonathan@gmail.com',
      password: 'J@nathan123',
      confirmPassword: 'J@nathan123',
    })

    //Expect: é o que eu estou recebendo
    expect(response.body).toHaveProperty('message')
  })

  it('should be not able to create a new user', async () => {
    const response = await request(app).post('/signup').send({
      name: 'Jonathan Raphael',
      email: 'jonathan@gmail.com',
      password: 'J@nathan123',
    })

    expect(response.body).toHaveProperty('error')
  })
})
