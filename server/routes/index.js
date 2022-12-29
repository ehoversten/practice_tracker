const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/login', (req, res) => {
    res.send("Login Route")
});

router.get('/register', (req, res) => {
    res.send("Register Route")
});

router.get('/', (req, res) => {
    console.log("Landing")

    res.send("Landing Route")
});


module.exports = router;