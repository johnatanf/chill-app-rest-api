"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Season, {
        foreignKey: "season_id",
      });
    }
  }
  Episode.init(
    {
      episode_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      season_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "season",
          key: "season_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      episode_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      episode_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Episode",
      tableName: "episode",
    }
  );

  return Episode;
};
