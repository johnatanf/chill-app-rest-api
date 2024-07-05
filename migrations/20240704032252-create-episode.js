"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("episode", {
      episode_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      season_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "ParentalRating",
        //   key: "parental_rating_id"
        // }
      },
      episode_number: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      episode_description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      duration_minutes: {
        type: Sequelize.DataTypes.INTEGER,
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
    return queryInterface.dropTable("episode");
  },
};
