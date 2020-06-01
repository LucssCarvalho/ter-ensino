exports.up = function (knex) {
  return knex.schema.createTable('articles', table => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('imageURL')
    table.string('content').notNullable()
    table.string('category').notNullable()
    table.integer('userId').references('id').inTable('users').notNullable()
    table.string('createAt').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('articles')
}
