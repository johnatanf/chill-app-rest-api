"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("content_director", {
      content_director_id: {
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
      director_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: "director",
          key: "director_id",
        },
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
    return queryInterface.dropTable("content_director");
  },
};
