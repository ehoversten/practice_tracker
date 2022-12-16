const router = require('express').Router();

router.get('/', (req, res) => {
    console.log("In router")

    res.send("In Router")
})


module.exports = router;