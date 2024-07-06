"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Content, {
        through: models.ContentDirector,
        foreignKey: "director_id",
        otherKey: "content_id",
      });
    }
  }
  Director.init(
    {
      director_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      director_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Director",
      tableName: "director",
    }
  );

  return Director;
};
