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
              .set('Authorization', response.body.token)
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
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
              .set('Authorization', response.body.token)
              .send({
                // title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
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
              .get('/articles')
              .set('Authorization', response.body.token)
              .then(response =>
                expect(response.body).toHaveProperty('articles')
              )
          )
      )
  })

  it('should not be able to get all articles', () => {
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
              .get('/articles')
              // .set('Authorization', response.body.token)
              .then(response => expect(response.body).toHaveProperty('error'))
          )
      )
  })

  /////////////////Updated Article///////////////////////////

  it('should be able to updated article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan2@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan2@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .set('Authorization', response.body.token)
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
              })
              .then(() =>
                request(app)
                  .put('/articles/1')
                  .set('Authorization', response.body.token)
                  .send({
                    title: 'VueJS vai mudar o mundo',
                    imageURL:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                    content:
                      'VueJS e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                    category: 'Programação',
                  })
                  .then(response =>
                    expect(response.body).toHaveProperty('message')
                  )
              )
          )
      )
  })

  it('should not be able to updated article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan2@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan2@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .set('Authorization', response.body.token)
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
              })
              .then(() =>
                request(app)
                  .put('/articles/1')
                  // .set('Authorization', response.body.token)
                  .send({
                    title: 'VueJS vai mudar o mundo',
                    imageURL:
                      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                    content:
                      'VueJS e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                    category: 'Programação',
                  })
                  .then(response =>
                    expect(response.body).toHaveProperty('error')
                  )
              )
          )
      )
  })

  /////////////////Delete Article///////////////////////////

  it('should be able to delete article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan3@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan3@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .set('Authorization', response.body.token)
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
              })
              .then(() =>
                request(app)
                  .delete('/articles/1')
                  .set('Authorization', response.body.token)
                  .then(response =>
                    expect(response.body).toHaveProperty('message')
                  )
              )
          )
      )
  })

  it('should not be able to delete article', () => {
    return request(app)
      .post('/signup')
      .send({
        name: 'Jonathan Raphael',
        email: 'jonathan3@gmail.com',
        password: 'J@nathan123',
        confirmPassword: 'J@nathan123',
      })
      .then(() =>
        request(app)
          .post('/signin')
          .send({
            email: 'jonathan3@gmail.com',
            password: 'J@nathan123',
          })
          .then(response =>
            request(app)
              .post('/articles')
              .set('Authorization', response.body.token)
              .send({
                title: 'Javascript vai mudar o mundo',
                imageURL:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
                content:
                  'Javascript e como essa linguagem de programação irá mudar a sua forma de programar, e facilitar seu aprendizado',
                category: 'Programação',
              })
              .then(() =>
                request(app)
                  .delete('/articles/1')
                  // .set('Authorization', response.body.token)
                  .then(response =>
                    expect(response.body).toHaveProperty('error')
                  )
              )
          )
      )
  })
})
