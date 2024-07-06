"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user_account_subscription",
      [
        {
          user_account_subscription_id: 1,
          user_account_id: 1,
          subscription_id: 1,
          start_date: "2024-07-03",
          end_date: "2025-07-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_account_subscription_id: 2,
          user_account_id: 2,
          subscription_id: 2,
          start_date: "2024-05-03",
          end_date: "2025-05-03",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_account_subscription", null, {});
  },
};
