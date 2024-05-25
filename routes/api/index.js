const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const productRoutes = require('./productRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/Categories', categoryRoutes);
router.use('/Products', productRoutes);
router.use('/Tags', tagRoutes);

module.exports = router;
