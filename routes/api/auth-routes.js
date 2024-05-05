const router = require('express').Router();
const { Card,User } = require('../../models');
const {log}= console
const bcrypt = require('bcrypt')

router.post('/signin', async (req, res) => {
    const {username,password} =req.body
    const CurrentUser=await User.findOne({
        where:{username:username,
        }
    })
    // const isvalid=User.validatePassword(CurrentUser.password)
    const isvalid= bcrypt.compareSync(password, CurrentUser.password)  
    if(!isvalid||!CurrentUser){
        res.render('signin',{message:"Incorrect username or password"})
    }
    else{
        req.session.userID=CurrentUser.id
        res.redirect('/')
        // res.json({username:CurrentUser.username,password:isvalid})
    }
//   res.render("register")
  });
module.exports=router