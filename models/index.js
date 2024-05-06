// import models
const User = require('./User');
const Card = require('./Card');
const Comment= require('./Comment')
const CardCommentPivot=require('./CardCommentPivot')
User.hasMany(Card)
Card.belongsTo(User)

Card.belongsToMany(Comment,{through:'CardCommentPivot'})
Comment.belongsToMany(Card,{through:'CardCommentPivot'})


module.exports = {
  Card,User,Comment,CardCommentPivot
};
