"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ContentGenre.init(
    {
      content_genre_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Content",
          key: "content_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      genre_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Genre",
          key: "genre_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ContentGenre",
      tableName: "content_genre",
    }
  );

  return ContentGenre;
};
