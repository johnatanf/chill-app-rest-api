"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subscription",
      [
        {
          subscription_id: 1,
          plan_name: "Individual",
          price_month: 49990,
          number_of_accounts: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_id: 2,
          plan_name: "Berdua",
          price_month: 79990,
          number_of_accounts: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_id: 3,
          plan_name: "Keluarga",
          price_month: 159990,
          number_of_accounts: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subscription", null, {});
  },
};
