"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "payment_method",
      [
        {
          payment_method_id: 1,
          payment_method_name: "BCA Virtual Account",
          payment_method_description: "BCA Virtual Account",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          payment_method_id: 2,
          payment_method_name: "Kartu Kredit",
          payment_method_description: "Mastercard, Visa, etc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("payment_method", null, {});
  },
};
