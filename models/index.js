// import models
const User = require('./User');
const Card = require('./Card');
const Comment= require('./Comment')
const CardCommentPivot=require('./CardCommentPivot')
User.hasMany(Card)
Card.belongsTo(User)

Card.belongsToMany(Comment,{through:'cardcommentpivot'})
Comment.belongsToMany(Card,{through:'cardcommentpivot'})


module.exports = {
  Card,User,Comment//,CardCommentPivot
};
