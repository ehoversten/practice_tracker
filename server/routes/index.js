const router = require('express').Router();
const apiRoutes = require('./api');
const { register, login } = require('../controllers/authController');

router.use('/api', apiRoutes);

router.post('/login', login);
router.post('/register', register);


router.get('/', (req, res) => {
    console.log("Landing")

    res.send("Landing Route")
});


module.exports = router;