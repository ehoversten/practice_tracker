const router = require('express').Router();


// -- All routes prefixed with '/api/practice'
router.get('/', (req, res) => {
    res.send("Practice GET Route");
});

// -- GET ONE
router.get('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("Practice GET ONE Route");
});

// -- CREATE 
router.post('/', (req, res) => {
    res.send("Practice POST Route");
});

// -- UPDATE
router.put('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("Practice PUT Route");
}); 

// -- DELETE
router.delete('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("Practice DELETE Route");
});


module.exports = router;