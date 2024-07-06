"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init(
    {
      payment_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_account_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "ParentalRating",
        //   key: "parental_rating_id"
        // }
      },
      payment_method_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "ParentalRating",
        //   key: "parental_rating_id"
        // }
      },
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      payment_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      payment_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      transaction_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_status: {
        type: DataTypes.ENUM(
          "Pending",
          "Success",
          "Failed",
          "Refunded",
          "Cancelled"
        ),
        defaultValue: "Pending",
      },
    },
    {
      sequelize,
      modelName: "Payment",
      tableName: "payment",
    }
  );

  return Payment;
};
