"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "watch_list",
      [
        {
          watch_list_id: 1,
          user_account_id: 1,
          content_id: 2,
          date_added: "2024-07-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          watch_list_id: 2,
          user_account_id: 2,
          content_id: 1,
          date_added: "2024-06-28",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("watch_list", null, {});
  },
};
