"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "content_actor",
      [
        {
          content_actor_id: 1,
          content_id: 2,
          actor_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 2,
          content_id: 2,
          actor_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 3,
          content_id: 2,
          actor_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 4,
          content_id: 2,
          actor_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 5,
          content_id: 2,
          actor_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 6,
          content_id: 2,
          actor_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 7,
          content_id: 2,
          actor_id: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 8,
          content_id: 2,
          actor_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 9,
          content_id: 2,
          actor_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 10,
          content_id: 1,
          actor_id: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 11,
          content_id: 1,
          actor_id: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 12,
          content_id: 1,
          actor_id: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 13,
          content_id: 1,
          actor_id: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 14,
          content_id: 1,
          actor_id: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 15,
          content_id: 1,
          actor_id: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 16,
          content_id: 1,
          actor_id: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          content_actor_id: 17,
          content_id: 1,
          actor_id: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_actor", null, {});
  },
};
