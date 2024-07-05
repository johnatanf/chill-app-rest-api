"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("rating", {
      rating_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "ParentalRating",
        //   key: "parental_rating_id"
        // }
      },
      rating_value: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      rating_timestamp: {
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
    return queryInterface.dropTable("rating");
  },
};
