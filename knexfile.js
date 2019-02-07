module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/country_music'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}