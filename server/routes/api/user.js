const router = require('express').Router();
const { User } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2h' });
}

// -- CREATE 
router.post('/', async (req, res) => {
    // console.log(req.body);

    const { username, email, password } = req.body;
    // console.log(username, email, password);

    try {
        // Create New User
        let newUser = await User.create(req.body);
        // console.log("New user created");

        // create token
        let token = createToken(newUser._id);

        // res.status(201).json(newUser);
        res.status(201).json({email, token});
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