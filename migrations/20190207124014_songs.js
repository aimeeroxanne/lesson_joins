
exports.up = function(knex, Promise) {
  return knex.schema.createTable('songs', table => {
    table.increments()
    table.string('song').notNullable().defaultsTo('')
    table.integer('year').notNullable()
    table.boolean('isCollab').notNullable().defaultsTo(false)    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists')
};
