"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("user_account", {
      user_account_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      username: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      date_of_birth: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      avatar_image_url: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      password_hash: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      verification_token: {
        type: Sequelize.DataTypes.CHAR(36),
        allowNull: false,
        unique: true,
      },
      verified: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("user_account");
  },
};
