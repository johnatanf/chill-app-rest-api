"use strict";

const { UserAccount } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await UserAccount.bulkCreate(
      [
        {
          user_account_id: 1,
          username: "user1",
          email: "user1@chilluser.com",
          date_of_birth: "1986-01-17",
          avatar_image_url: "",
          password_hash: "123456",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_account_id: 2,
          username: "user2",
          email: "user2@chilluser.com",
          date_of_birth: "1995-06-25",
          avatar_image_url: "",
          password_hash: "abcdef",
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
