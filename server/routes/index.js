const router = require('express').Router();
const apiRoutes = require('./api');
// const { register } = require('../controllers/authController');
// const signup_get = require('../controllers/authController');
// remove after refactor
const User = require('../models');

router.use('/api', apiRoutes);

router.get('/login', (req, res) => {
    res.send("Login Route")
});

// router.get('/register', signup_get);

router.post('/register', async (req, res) => {
    console.log("Register Route");
    console.log(req.body);
    const { username, email, password } = req.body;
    console.log(username, email, password);

    try {
        let newUser = await User.signup(username, email, password);

        console.log("New user created");
        // res.status(201).json(newUser);
        res.status(201).json({email, newUser});
    } catch (err) {
        // throw Error(err);
        res.status(400).json({ error: err.message });
    }
});

router.get('/', (req, res) => {
    console.log("Landing")

    res.send("Landing Route")
});


module.exports = router;