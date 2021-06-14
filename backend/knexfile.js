// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: "localhost",
      database: "bloconotas",
      user: 'postgres',
      password: 'ph33155137'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    },
    useNullAsDefault: true
  }

};
