const router = require('express').Router();
const apiRoutes = require('./api');
const navigationRoutes =require('./navigation-Routes')

router.use('/',navigationRoutes)
router.use('/api', apiRoutes);
// if the user gets lost they go back to the home route
router.use((req, res) => {
  // res.send("<h1>Wrong Route!</h1>")
  res.redirect('/')
});

module.exports = router;