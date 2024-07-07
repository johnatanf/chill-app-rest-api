"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "payment",
      [
        {
          payment_id: 1,
          user_account_id: 1,
          payment_method_id: 2,
          amount: 49990,
          payment_date: "2024-07-03",
          payment_code: "AAAAAA",
          transaction_id: "123981ADSi90a",
          payment_status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_id: 2,
          user_account_id: 2,
          payment_method_id: 2,
          amount: 79990,
          payment_date: "2024-05-03",
          payment_code: "BBBBBB",
          transaction_id: "223981ADSi90a",
          payment_status: "Success",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payment", null, {});
  },
};
