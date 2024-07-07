"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Season extends Model {
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

      this.hasMany(models.Episode, {
        foreignKey: "season_id",
        sourceKey: "season_id",
      });
    }
  }
  Season.init(
    {
      season_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "content",
          key: "content_id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      season_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      season_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Season",
      tableName: "season",
    }
  );

  return Season;
};
