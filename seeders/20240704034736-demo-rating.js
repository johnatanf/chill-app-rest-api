"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "rating",
      [
        {
          rating_id: 1,
          content_id: 1,
          rating_value: 5,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 2,
          content_id: 2,
          rating_value: 3,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 3,
          content_id: 1,
          rating_value: 4,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 4,
          content_id: 1,
          rating_value: 1,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 5,
          content_id: 2,
          rating_value: 2,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 6,
          content_id: 2,
          rating_value: 4,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 7,
          content_id: 1,
          rating_value: 3,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_id: 8,
          content_id: 1,
          rating_value: 4,
          rating_timestamp: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("rating", null, {});
  },
};
