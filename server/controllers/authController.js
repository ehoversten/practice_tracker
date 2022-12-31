const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2h' });
}

// login user
const login = async (req, res) => {
    res.json({ msg: 'login user'});
}

// register user
const register = async (req, res) => {
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
}


module.exports = { login, register };