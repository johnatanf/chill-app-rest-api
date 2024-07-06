"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "content_director",
      [
        {
          content_director_id: 1,
          content_id: 2,
          director_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_director_id: 2,
          content_id: 2,
          director_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_director_id: 3,
          content_id: 2,
          director_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_director_id: 4,
          content_id: 2,
          director_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_director_id: 5,
          content_id: 1,
          director_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_director", null, {});
  },
};
