"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "season",
      [
        {
          season_id: 1,
          content_id: 2,
          season_number: 1,
          release_date: "2024-06-14",
          season_description: "Season description here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("season", null, {});
  },
};
