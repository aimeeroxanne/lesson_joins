
exports.seed = function(knex, Promise) {

  return knex('artists').del()
    .then(function () {

      return knex('artists').insert([
        {
          id: 1,
          artist: 'Dolly Parton', 
          isAlive: true
        },
        {
          id: 2,
          artist: 'Townes Van Zandt', 
          isAlive: false        
        },
        {
          id: 3,
          artist: 'Emmylou Harris', 
          isAlive: true
        }

      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists))"
      )
    })
}
