// import models
const User = require('./User');
const Card = require('./Card');

User.hasMany(Card)
Card.belongsTo(User)


module.exports = {
  Card,User
};
