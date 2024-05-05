const router = require('express').Router();
const userRoutes = require('./user-routes');
const productRoutes = require('./product-routes');
const cardRoutes = require('./card-routes');

router.use('/', userRoutes);
// router.use('/products', productRoutes);
router.use('/', cardRoutes);

module.exports = router;
