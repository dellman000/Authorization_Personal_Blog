const router = require('express').Router();
const {log}= console;
const { Card,User} = require('../models/index');

router.get('/', async (req, res) => {
    // home page

const allcards=await Card.findAll()
const currentUser=await User.findByPk(req.session.userID)
const allCards=await Card.findAll({include: User})
// log(allCards[0])
const databaseCards=[]
allCards.forEach(element => {
  databaseCards.push(element.dataValues)
});
log(databaseCards)
if(req.session.userID||currentUser){
  // log(currentUser)
  res.render('homepage',{userID:currentUser.id,username:currentUser.username,AllCards:databaseCards})
}
res.render('homepage',{AllCards:databaseCards})

  });

  router.get('/Dashboard', async (req, res) => {
    // req.session.userID
    const currentUser=await User.findByPk(req.session.userID)
    log(req.session.userID)
  if(!req.session.userID){
    res.redirect('/SignUp')
  }
  else{
    const allCards=await Card.findAll({
      where:{
        user_id:currentUser.id
      }
    })
    // const map=allCards.map(element=>{
    //   return element.card
    // })
    const map=[]
    const sendarr=[]
    map.push(allCards)
    map[0].forEach(element => {
        sendarr.push(element.dataValues)
    });
   
    res.render("dashboard",{userID:currentUser.id,username:currentUser.username,cardList:sendarr})
  }
    // Dashboard

  });


  router.get('/Register', (req, res) => {
    // Register
  res.render("register")
  });

  router.get('/SignUp', (req, res) => {
    // Register
  res.render("signin")
  });

  router.get('/logout', (req, res) => {
    // Register
    req.session.destroy(()=>{
      res.redirect("/")
    })
  
  });


module.exports = router;