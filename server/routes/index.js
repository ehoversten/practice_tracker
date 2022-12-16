const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    console.log("Landing")

    res.send("Landing Route")
});



module.exports = router;