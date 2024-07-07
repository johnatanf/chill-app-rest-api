"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.SubscriptionFeature, {
        foreignKey: "subscription_id",
        sourceKey: "subscription_id",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.UserAccount, {
        through: models.UserAccountSubscription,
        foreignKey: "subscription_id",
        otherKey: "user_account_id",
      });
    }
  }
  Subscription.init(
    {
      subscription_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      plan_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price_month: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      number_of_accounts: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Subscription",
      tableName: "subscription",
    }
  );

  return Subscription;
};
