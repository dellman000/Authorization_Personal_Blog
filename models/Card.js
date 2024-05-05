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
    },
    user_id:{
      type: DataTypes.INTEGER,
    },
    // , 
    // createdDate:{
    //   type: DataTypes.DATE,
    //   allowNull:false
    // }
  },
  {
    sequelize: client,
    timestamps: true,
    updatedAt:'updatedDate',
    freezeTableName: true,
    underscored: true,
    createdAt:'createdDate',
    modelName: 'card',
  }
);

module.exports = Card;
