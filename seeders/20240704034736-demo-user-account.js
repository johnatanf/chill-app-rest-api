"use strict";

const { UserAccount } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await UserAccount.bulkCreate(
      [
        {
          user_account_id: 1,
          first_name: "A",
          last_name: "B",
          username: "user1",
          email: "user1@chilluser.com",
          date_of_birth: "1986-01-17",
          avatar_image_url: "",
          password_hash: "123456",
          verification_token: "75b9d752-33a2-40fe-945f-a05ff593ca59",
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_account_id: 2,
          first_name: "C",
          last_name: "",
          username: "user2",
          email: "user2@chilluser.com",
          date_of_birth: "1995-06-25",
          avatar_image_url: "",
          password_hash: "abcdef",
          verification_token: "083b141a-89e0-4eb8-b19c-772fcf7c57ab",
          verified: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {
        individualHooks: true
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_account", null, {});
  },
};
