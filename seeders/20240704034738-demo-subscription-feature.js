"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "subscription_feature",
      [
        {
          subscription_feature_id: 1,
          subscription_id: 1,
          feature_description: "Tidak ada iklan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 2,
          subscription_id: 1,
          feature_description: "Kualitas 720p",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 3,
          subscription_id: 1,
          feature_description: "Download konten pilihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 4,
          subscription_id: 2,
          feature_description: "Tidak ada iklan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 5,
          subscription_id: 2,
          feature_description: "Kualitas 1080p",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 6,
          subscription_id: 2,
          feature_description: "Download konten pilihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 7,
          subscription_id: 3,
          feature_description: "Tidak ada iklan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 8,
          subscription_id: 3,
          feature_description: "Kualitas 4K",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          subscription_feature_id: 9,
          subscription_id: 3,
          feature_description: "Download konten pilihan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("subscription_feature", null, {});
  },
};
