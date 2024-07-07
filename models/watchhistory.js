"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class WatchHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.UserAccount, {
        foreignKey: "user_account_id",
        onDelete: "CASCADE",
      });

      this.belongsTo(models.Content, {
        foreignKey: "content_id",
        onDelete: "CASCADE",
      });
    }
  }
  WatchHistory.init(
    {
      watch_history_id: {
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
      user_account_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "user_account",
          key: "user_account_id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        allowNull: false,
      },
      progress: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false,
        validate: {
          min: 0,
          max: 1,
        },
      },
    },
    {
      sequelize,
      modelName: "WatchHistory",
      tableName: "watch_history",
    }
  );

  return WatchHistory;
};
