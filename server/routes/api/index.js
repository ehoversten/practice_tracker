const router = require('express').Router();
const userRoutes = require('./user');
const practiceRoutes = require('./practice');

router.use('/user', userRoutes);
router.use('/practice', practiceRoutes);

module.exports = router;