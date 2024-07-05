"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "actor",
      [
        {
          actor_id: 1,
          actor_name: "Ario Bayu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 2,
          actor_name: "Marissa Anita",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 3,
          actor_name: "Lukman Sardi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 4,
          actor_name: "Nirina Zubir",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 5,
          actor_name: "Yoga Pratama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 6,
          actor_name: "Kiki Narendra",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 7,
          actor_name: "Sita Nursanti",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 8,
          actor_name: "Fachry Albar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 9,
          actor_name: "Asmara Abigail",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 10,
          actor_name: "Oki Rengga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 11,
          actor_name: "Boris Bokir Manullang",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 12,
          actor_name: "Bene Dion Rajagukguk",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 13,
          actor_name: "Indra Jegel",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 14,
          actor_name: "Tessa Biani",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 15,
          actor_name: "Arie Kriting",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 16,
          actor_name: "Arief Didu",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          actor_id: 17,
          actor_name: "Indah Permatasari",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("actor", null, {});
  },
};
