const { Model, DataTypes } = require('sequelize');
const client = require('../config/connection.js')
const sequelize = require('../config/connection.js');

class CardCommentPivot extends Model {}

CardCommentPivot.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    card_id:{
      type: DataTypes.STRING,
    //   allowNull:false
    },
    comment_id:{
      type: DataTypes.INTEGER,
    },

  },
  {
    sequelize: client,
    timestamps: false,
    updatedAt:'updatedDate',
    freezeTableName: true,
    underscored: true,
    createdAt:'createdDate',
    modelName: 'cardcommentpivot',
  }
);

module.exports = CardCommentPivot;