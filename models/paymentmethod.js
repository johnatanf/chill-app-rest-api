"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PaymentMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Payment, {
        foreignKey: "payment_method_id",
        sourceKey: "payment_method_id",
        onDelete: "CASCADE",
      });
    }
  }
  PaymentMethod.init(
    {
      payment_method_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      payment_method_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      payment_method_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PaymentMethod",
      tableName: "payment_method",
    }
  );

  return PaymentMethod;
};
