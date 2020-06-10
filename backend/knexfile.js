module.exports = {
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || process.env.DATABASE_LOCAL,
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite',
    },
    migrations: {
      directory: './src/database/migrations',
    },
    useNullAsDefault: true,
  },
}
