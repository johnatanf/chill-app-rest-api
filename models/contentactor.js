"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ContentActor extends Model {
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

      this.belongsTo(models.Actor, {
        foreignKey: "actor_id",
      });
    }
  }
  ContentActor.init(
    {
      content_actor_id: {
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
        allowNull: false,
      },
      actor_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "actor",
          key: "actor_id",
        },
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ContentActor",
      tableName: "content_actor",
    }
  );

  return ContentActor;
};
