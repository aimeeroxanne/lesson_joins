exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists', table => {
    table.increments()
    table.string('artist').notNullable().defaultsTo('')
    table.boolean('isAlive').notNullable().defaultsTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists')
};
