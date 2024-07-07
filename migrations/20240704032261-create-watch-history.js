"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("watch_history", {
      watch_history_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      content_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "content",
          key: "content_id",
        },
        allowNull: false,
      },
      user_account_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "user_account",
          key: "user_account_id",
        },
        allowNull: false,
      },
      progress: {
        type: Sequelize.DataTypes.DECIMAL(3, 2),
        allowNull: false,
        validate: {
          min: 0,
          max: 1,
        },
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
    return queryInterface.dropTable("watch_history");
  },
};
