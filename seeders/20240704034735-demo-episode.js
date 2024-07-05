"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "episode",
      [
        {
          episode_id: 1,
          season_id: 1,
          episode_number: 1,
          title: "Old House",
          episode_description:
            "A modest taxi driver comes across a mysterious nursing home for the ultrarich, but soon discovers that it's hiding a sinister secret.",
          release_date: "2024-06-14",
          duration_minutes: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          episode_id: 2,
          season_id: 1,
          episode_number: 2,
          title: "The Orphan",
          episode_description:
            "A couple living in poverty adopts an orphan with the uncanny ability to bring them wealth in six days; but on the seventh day, grave danger awaits.",
          release_date: "2024-06-14",
          duration_minutes: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("episode", null, {});
  },
};
