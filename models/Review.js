const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
  movie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

module.exports = Review;
