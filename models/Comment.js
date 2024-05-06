const { Model, DataTypes } = require('sequelize');
const client = require('../config/connection.js')
const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    text:{
      type: DataTypes.STRING,
      allowNull:false
    },
    card_id:{
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

module.exports = Comment;