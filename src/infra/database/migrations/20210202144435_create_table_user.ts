import Knex from 'knex'

export async function up (knex: Knex): Promise<any> {
  return await knex.schema.createTable('user', (table: Knex.TableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('(uuid_generate_v4())'))
    table.text('email').unique().notNullable()
    table.text('login_email')
    table.text('password')
    table.enum('type', ['person', 'enterprise'])
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('user')
}
