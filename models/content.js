'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.ParentalRating, {
        foreignKey: 'parental_rating_id',
        onDelete: 'CASCADE'
      })
    }
  }
  Content.init({
    content_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content_description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thumbnail_image_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content_type: {
      type: DataTypes.ENUM('Movie', 'Series'),
      allowNull: false
    },
    chill_original: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    chill_original: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    premium: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    duration_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Content',
  });

  
  return Content;
};