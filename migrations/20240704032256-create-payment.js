"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("payment", {
      payment_id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_account_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "user_account",
          key: "user_account_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      payment_method_id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "payment_method",
          key: "payment_method_id",
        },
      },
      amount: {
        type: Sequelize.DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      payment_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      payment_code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      transaction_id: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      payment_status: {
        type: Sequelize.DataTypes.ENUM(
          "Pending",
          "Success",
          "Failed",
          "Refunded",
          "Cancelled"
        ),
        defaultValue: "Pending",
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
    return queryInterface.dropTable("payment");
  },
};
