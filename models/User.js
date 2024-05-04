const { Model, DataTypes } = require('sequelize');
const client = require('../config/connection.js')
const sequelize = require('../config/connection.js');
const bcrypt = require('bcrypt')
class User extends Model {

  validatePassword(password){
    return bcrypt.compareSync(password, this.password)  
  }


}

User.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        len: 6
    }
    }
  },
  {
    sequelize: client,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    hooks: {
      beforeCreate: async (newData) => {
          newData.password = await bcrypt.hash(newData.password, 10)//encrypt the password at the creation
          return newData
      }
     }
  }
);

module.exports = User;
