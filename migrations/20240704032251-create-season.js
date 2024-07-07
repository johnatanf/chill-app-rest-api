"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("season", {
      season_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "content",
          key: "content_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      season_number: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      season_description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
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
    return queryInterface.dropTable("season");
  },
};
