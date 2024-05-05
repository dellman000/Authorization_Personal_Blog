const router = require('express').Router();
const { Card,User } = require('../../models');
const { findByPk } = require('../../models/User');
const {log}= console
// The `/api/tags` endpoint


router.get('/Card/:id', (req, res) => {
  // find all Cards associated with User `id`
  return "all the cards"
});

router.post('/Card/', async (req, res) => {
  // create a new Card
  const {title,text} = req.body
  try {
    const  userID = req.session.userID
    log('the user id sent this post with the number ',userID)
    const CurentUser= await User.findByPk(userID)

    // create a new User
      await Card.create({
        title:title,
        text:text,
        user_id: CurentUser.id
      })
      // res.json({Title:title, Text:text})
      res.redirect('/Dashboard')
  } catch (error) {
    log(error)
    res.json({err:error})
  }

});

router.put('/Card/:id', (req, res) => {
  // update a Cards's details by its `id` value
});

router.delete('/Card/:id', (req, res) => {
  // delete on Card by its `id` value
});

module.exports = router;
