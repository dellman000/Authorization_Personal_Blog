const router = require('express').Router();
const { User } = require('../../models');
const {log}= console
// The `/api/` endpoint

router.get('/User', (req, res) => {
  // find all Users
  log("ghbfjsdkl")
  res.json({message:"you are are at the get route"})
  // be sure to include its associated Products
});

router.get('/User/:id', async (req, res) => {
  
  try {
    // find one User by its `id` value
    const foundUser= await User.findByPk( req.params.id)
    log(foundUser)
    res.json(foundUser)
  } catch (error) {
    log(error)
    res.send(error)
  }
  // be sure to include its associated Blogpost
});

router.post('/User', async (req, res) => {
  const {username,password} = req.body
  try {
    // create a new User
    // log('login:',username,password)
    const newUser= await User.create({
      username:username,
      password:password
    })
    req.session.userID=newUser.id
      // res.json({UserName:username, Password:password})
      res.redirect('/')
  } catch (error) {
    log(error)
    res.json({err:error})
  }

  
});

router.put('User/:id', (req, res) => {

  // update a User by its `id` value
});

router.delete('User/:id', (req, res) => {
  // delete a User by its `id` value
});

module.exports = router;
