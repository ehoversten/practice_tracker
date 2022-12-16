const router = require('express').Router();


// -- All routes prefixed with '/api/user'
router.get('/', (req, res) => {
    res.send("User GET Route");
});

// -- GET ONE
router.get('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User GET ONE Route");
});

// -- CREATE 
router.post('/', (req, res) => {
    res.send("User POST Route");
});

// -- UPDATE
router.put('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User PUT Route");
});

// -- DELETE
router.delete('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User DELETE Route");
});


module.exports = router;