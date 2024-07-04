"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("content", {
      content_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      parental_rating_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'parental_rating',
          key: 'parental_rating_id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      content_description: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      description_image_url: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      thumbnail_image_url: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true,
      },
      content_type: {
        type: Sequelize.DataTypes.ENUM("Movie", "Series"),
        allowNull: false,
      },
      chill_original: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
      chill_original: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
      premium: {
        type: Sequelize.DataTypes.BOOLEAN,
        allowNull: false,
      },
      duration_minutes: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
      },
      release_date: {
        type: Sequelize.DataTypes.DATEONLY,
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
    return queryInterface.dropTable("content");
  },
};
