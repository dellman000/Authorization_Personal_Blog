const router = require('express').Router();
const { Card } = require('../../models');
const {log}= console
// The `/api/tags` endpoint


router.get('/Card/:id', (req, res) => {
  // find all Cards associated with User `id`

});

router.post('/Card/', async (req, res) => {
  // create a new Card
  const {title,text} = req.body
  try {
    // create a new User
      await Card.create({
        title:title,
        text:text
      })
      res.json({Title:title, Text:text})
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
