"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "content_genre",
      [
        {
          content_genre_id: 1,
          content_id: 1,
          genre_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_genre_id: 2,
          content_id: 1,
          genre_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_genre_id: 3,
          content_id: 2,
          genre_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_genre_id: 4,
          content_id: 2,
          genre_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_genre_id: 5,
          content_id: 2,
          genre_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_genre_id: 6,
          content_id: 2,
          genre_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_genre", null, {});
  },
};
