import knex from 'knex'
const knexfile = require('./config/knexfile')

export default knex(knexfile.development)
