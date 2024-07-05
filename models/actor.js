"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.ParentalRating, {
        foreignKey: "parental_rating_id",
        sourceKey: "parental_rating_id",
        onDelete: "CASCADE",
      });
    }
  }
  Actor.init(
    {
      actor_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      actor_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Actor",
      tableName: "actor",
    }
  );

  return Actor;
};
