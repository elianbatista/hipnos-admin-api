require('ts-node/register')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: 5433,
      database: 'olawolff_auth',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: '../migrations'
    }
  }
}
