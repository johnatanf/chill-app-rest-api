"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentDirector extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Content, {
        foreignKey: "content_id",
      });

      this.belongsTo(models.Director, {
        foreignKey: "director_id",
      });
    }
  }
  ContentDirector.init(
    {
      content_director_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      content_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "content",
          key: "content_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      director_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "director",
          key: "director_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ContentDirector",
      tableName: "content_director",
    }
  );

  return ContentDirector;
};
