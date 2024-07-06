"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("subscription", {
      subscription_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      price_month: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      number_of_accounts: {
        type: Sequelize.DataTypes.INTEGER,
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
    return queryInterface.dropTable("subscription");
  },
};
