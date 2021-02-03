import * as Knex from 'knex'

export async function up (knex: Knex): Promise<void> {
  return await knex.schema.createTable('noticia', (table: Knex.TableBuilder) => {
    table.uuid('id').primary().defaultTo(knex.raw('(uuid_generate_v4())'))
    table.text('titulo')
    table.text('descricao')
    table.text('texto')
    table.text('imagem')

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())
  })
}

export async function down (knex: Knex): Promise<void> {
  return await knex.schema.dropTable('noticia')
}
