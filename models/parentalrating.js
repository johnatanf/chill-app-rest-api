"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ParentalRating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Content, {
        foreignKey: "parental_rating_id",
        sourceKey: "parental_rating_id",
      });
    }
  }
  ParentalRating.init(
    {
      parental_rating_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rating_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ParentalRating",
      tableName: "parental_rating",
    }
  );
  return ParentalRating;
};
