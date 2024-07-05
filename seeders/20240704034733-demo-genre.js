"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "genre",
      [
        {
          genre_id: 1,
          genre_name: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 2,
          genre_name: "Horror",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 3,
          genre_name: "Sci-Fi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 4,
          genre_name: "Mystery",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          genre_id: 5,
          genre_name: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("genre", null, {});
  },
};
