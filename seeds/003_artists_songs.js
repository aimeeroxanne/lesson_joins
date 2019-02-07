
exports.seed = function(knex, Promise) {

  return knex('songs').del()
    .then(function () {

      return knex('songs').insert([    
        {
          id: 1,
          artist_id: 1,
          song_id: 1
        },
        {
          id: 2,
          artist_id: 1,
          song_id: 2
        },
        {
          id: 3,
          artist_id: 1,
          song_id: 3
        },
        {
          id: 4,
          artist_id: 1,
          song_id: 4
        },
        {
          id: 5,
          artist_id: 1,
          song_id: 9
        },
        {
          id: 6,
          artist_id: 2,
          song_id: 5
        },
        {
          id: 7,
          artist_id: 2,
          song_id: 6
        },
        {
          id: 8,
          artist_id: 2,
          song_id: 7
        },
        {
          id: 9,
          artist_id: 3,
          song_id: 3
        },
        {
          id: 10,
          artist_id: 3,
          song_id: 8
        },
        {
          id: 11,
          artist_id: 3,
          song_id: 9
        },
        {
          id: 12,
          artist_id: 3,
          song_id: 10
        }
      ])
    })
}
