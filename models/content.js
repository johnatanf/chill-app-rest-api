"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.ParentalRating, {
        foreignKey: "parental_rating_id",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Season, {
        foreignKey: "content_id",
        sourceKey: "content_id",
        onDelete: "CASCADE",
      });

      this.hasMany(models.Rating, {
        foreignKey: "content_id",
        sourceKey: "content_id",
        onDelete: "CASCADE",
      });

      this.belongsToMany(models.Director, {
        through: models.ContentDirector,
        foreignKey: "content_id",
        otherKey: "director_id",
      });

      this.belongsToMany(models.Genre, {
        through: models.ContentGenre,
        foreignKey: "content_id",
        otherKey: "genre_id",
      });

      this.belongsToMany(models.Actor, {
        through: models.ContentActor,
        foreignKey: "content_id",
        otherKey: "actor_id",
      });

      this.belongsToMany(models.UserAccount, {
        through: models.WatchHistory,
        foreignKey: "content_id",
        otherKey: "user_account_id",
      });

      this.belongsToMany(models.UserAccount, {
        through: models.WatchList,
        foreignKey: "content_id",
        otherKey: "user_account_id",
      });
    }
  }
  Content.init(
    {
      content_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      parental_rating_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "parental_rating",
          key: "parental_rating_id",
        },
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description_image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      thumbnail_image_url: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      content_type: {
        type: DataTypes.ENUM("Movie", "Series"),
        allowNull: false,
      },
      chill_original: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      premium: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      release_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Content",
      tableName: "content",
    }
  );

  return Content;
};
