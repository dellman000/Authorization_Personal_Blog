const router = require('express').Router();
const {log}= console;

router.get('/', (req, res) => {
    // home page
//   res.send("hello")
  res.render('homepage')
  });

  router.get('/Dashboard', (req, res) => {
    // Dashboard
  res.render("dashboard")
  });


  router.get('/Register', (req, res) => {
    // Register
  res.render("register")
  });

  router.get('/SignUp', (req, res) => {
    // Register
  res.render("signin")
  });


module.exports = router;