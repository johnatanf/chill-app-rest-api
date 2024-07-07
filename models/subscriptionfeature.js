"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SubscriptionFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Subscription, {
        foreignKey: "subscription_id",
        onDelete: "CASCADE",
      });
    }
  }
  SubscriptionFeature.init(
    {
      subscription_feature_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      subscription_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "subscription",
          key: "subscription_id"
        }
      },
      feature_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SubscriptionFeature",
      tableName: "subscription_feature",
    }
  );

  return SubscriptionFeature;
};
