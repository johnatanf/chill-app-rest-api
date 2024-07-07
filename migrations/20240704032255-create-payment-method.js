"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("payment_method", {
      payment_method_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      payment_method_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      payment_method_description: {
        type: Sequelize.DataTypes.STRING,
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
    return queryInterface.dropTable("payment_method");
  },
};
