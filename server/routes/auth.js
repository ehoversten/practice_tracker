const router = require('express').Router();

router.get('/login', (req, res) => {
    res.send("Login Route")
});

router.get('/register', (req, res) => {
    res.send("Register Route")
});

router.post('/login', (req, res) => {
    console.log(req.body);
});

router.post('/register', (req, res) => {
    console.log(req.body);
});

module.exports = router;