const router = require('express').Router();
const { User } = require('../../models');

// -- All routes prefixed with '/api/user'
router.get('/', async (req, res) => {

    try {
        let allUsers = await User.find();
        console.log(allUsers);

        res.status(200).json(allUsers);
    } catch(err) {
        res.status(400).json({error: err.message})
    }

    // res.send("User GET Route");
});

// -- GET ONE
router.get('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User GET ONE Route");
});

// -- CREATE 
router.post('/', async (req, res) => {
    // console.log(req.body);

    const { username, email, password } = req.body;
    // console.log(username, email, password);

    try {
        let newUser = await User.create(req.body);

        console.log("New user created");
        res.status(201).json(newUser);
        // res.status(201).json({email, newUser});
    } catch (err) {
        // throw Error(err);
        res.status(400).json({ error: err.message });
    }
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