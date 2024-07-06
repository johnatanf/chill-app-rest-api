"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserAccountSubscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAccountSubscription.init(
    {
      user_account_subscription_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      user_account_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_account",
          key: "user_account_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      subscription_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "subscription",
          key: "subscription_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: "UserAccountSubscription",
      tableName: "user_account_subscription",
    }
  );

  return UserAccountSubscription;
};
