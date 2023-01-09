const router = require('express').Router();
const apiRoutes = require('./api');
const { register, login, getMe, logout } = require('../controllers/authController');

router.use('/api', apiRoutes);

const isAuthorized = require('../utils/auth');
router.post('/login', login);
router.post('/register', register);
router.post('/logout', logout);
router.get('/me', isAuthorized, getMe);


router.get('/', (req, res) => {
    // console.log("Landing")

    res.send("Landing Route")
});


module.exports = router;