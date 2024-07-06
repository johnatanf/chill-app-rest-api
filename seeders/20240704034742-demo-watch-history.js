"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "watch_history",
      [
        {
          watch_history_id: 1,
          user_account_id: 1,
          content_id: 1,
          progress: 0.58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          watch_history_id: 2,
          user_account_id: 2,
          content_id: 1,
          progress: 0.23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("watch_history", null, {});
  },
};
