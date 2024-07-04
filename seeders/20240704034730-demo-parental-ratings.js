"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "parental_rating",
      [
        {
          rating_name: "G",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_name: "PG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_name: "PG-13",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_name: "R",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          rating_name: "NC-17",
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("parental_rating", null, {});
  },
};
