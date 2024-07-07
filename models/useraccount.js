"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class UserAccount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Payment, {
        foreignKey: "user_account_id",
        sourceKey: "user_account_id",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.Content, {
        through: models.WatchHistory,
        foreignKey: "user_account_id",
        otherKey: "content_id",
      });

      this.belongsToMany(models.Content, {
        through: models.WatchList,
        foreignKey: "user_account_id",
        otherKey: "content_id",
      });

      this.belongsToMany(models.Subscription, {
        through: models.UserAccountSubscription,
        foreignKey: "user_account_id",
        otherKey: "subscription_id",
      });
    }
  }
  UserAccount.init(
    {
      user_account_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      avatar_image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UserAccount",
      tableName: "user_account",
      hooks: {
        beforeCreate: async (userAccount) => {
          try {
            if (userAccount.password_hash) {
              const salt = await bcrypt.genSalt(10);
              const hashedPassword = await bcrypt.hash(
                userAccount.password_hash,
                salt
              );
              userAccount.password_hash = hashedPassword;
            }
          } catch (error) {
            console.error("Error in beforeCreate hook:", error);
          }
        },
      },
    }
  );

  // Method to compare passwords
  UserAccount.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password_hash);
  };

  return UserAccount;
};
