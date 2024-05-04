const { Model, DataTypes } = require('sequelize');
const client = require('../config/connection.js')
const sequelize = require('../config/connection.js');

class Card extends Model {}

Card.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    text:{
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  {
    sequelize: client,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'card',
  }
);

module.exports = Card;
