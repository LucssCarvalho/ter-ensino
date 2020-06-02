const configKnex = require('../../knexfile')
const knex = require('knex')

const config =
  process.env.NODE_ENV === 'test'
    ? configKnex.test
    : process.env.NODE_ENV === 'development'
    ? configKnex.development
    : configKnex.production

const connection = knex(config)

process.env.NODE_ENV === 'test'
  ? undefined
  : connection.migrate.latest([config])

module.exports = connection
