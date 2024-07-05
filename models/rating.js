"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rating.init(
    {
      rating_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: "ParentalRating",
        //   key: "parental_rating_id"
        // }
      },
      rating_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      rating_timestamp: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Rating",
      tableName: "rating",
    }
  );

  return Rating;
};
