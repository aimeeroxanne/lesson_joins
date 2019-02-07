
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artists_songs', table => {
    table.increments()
    
    table.integer('artist_id').notNullable()
    table.foreign('artist_id').references('artists.id').onDelete('CASCADE')

    table.integer('song_id').notNullable()
    table.foreign('song_id').references('songs.id').onDelete('CASCADE')

    table.unique(['artist_id', 'song_id'])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artists_songs')
};
