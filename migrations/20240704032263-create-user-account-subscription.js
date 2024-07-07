"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("user_account_subscription", {
      user_account_subscription_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      user_account_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "user_account",
          key: "user_account_id",
        },
        allowNull: false,
      },
      subscription_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "subscription",
          key: "subscription_id",
        },
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DataTypes.DATE,
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
    return queryInterface.dropTable("user_account_subscription");
  },
};
