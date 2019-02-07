
exports.seed = function(knex, Promise) {

  return knex('songs').del()
    .then(function () {

      return knex('songs').insert([    
        {
          id: 1,
          song: "Dumb Blonde",
          year: 1967
        },
        {
          id: 2,
          song: "White Limozeen",
          year: 1989
        },
        {
          id: 3,
          song: "Wild Flowers",
          year: 1987
        },
        {
          id: 4,
          song: "9 to 5",
          year: 1980
        },
        {
          id: 5,
          song: "Pancho and Lefty",
          year: 1972
        },
        {
          id: 6,
          song: "For the Sake of the Song",
          year: 1968
        },
        {
          id: 7,
          song: "Rex's Blues",
          year: 1977
        },
        {
          id: 8,
          song: "Diamonds Are a Girl's Best Friend",
          year: 1983
        },
        {
          id: 9,
          song: "Making Plans",
          year: 1987
        },
        {
          id: 10,
          song: "Mister Sandman",
          year: 1981
        }
      ])
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('songs_id_seq', (SELECT MAX(id) FROM songs))"
      )
    })
}
