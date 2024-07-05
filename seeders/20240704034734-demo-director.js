"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "director",
      [
        {
          director_id: 1,
          director_name: "Joko Anwar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          director_id: 2,
          director_name: "Ray Pakpahan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          director_id: 3,
          director_name: "Tommy Dewo",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          director_id: 4,
          director_name: "Randolph Zaini",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          director_id: 5,
          director_name: "Muhadkly Acho",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("director", null, {});
  },
};
