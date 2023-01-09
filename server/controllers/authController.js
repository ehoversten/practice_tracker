const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Generate Token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '2h' });
}

// @desc    Authenticate User
// @route   POST /login   /api/users/login
// @access  Public
const login = async (req, res) => {
    const { email, password } = req.body;

    // validation
    if(!email || !password) {
        // throw new Error("Please add all fields");
        res.status(400).json({ error: "Please add all fields" });
    }

    try {
        let user = await User.findOne({ email: email });

        if(user) {
            let authorized = await bcrypt.compare(password, user.password);
            console.log('Authorized: ', authorized);
            const token = createToken(user._id);
    
            res.status(200).json({ email, token });
        }
        // res.status(200).json(token);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}
 
// @desc    Register User
// @route   POST /register  /api/users/register
// @access  Public
const register = async (req, res) => {
    const { username, email, password } = req.body;

    // validation
    if(!username || !email || !password) {
        // throw new Error("Please add all fields");
        res.status(400).json({ error: "Please add all fields" });
    }
    // Email already in Use(?)
    let exists = await User.findOne({ email });
    if(exists) {
        res.status(400).json({ error: "User already exists"})
    }
    
    try {
        // Create New User
        let newUser = await User.create(req.body);

        // create token
        let token = createToken(newUser._id);

        // res.status(201).json(newUser);
        res.status(201).json({email, token});
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

// @desc    Get User Data
// @route   GET /me  /api/users/me
// @access  Public
const getMe = async (req, res) => {
    // IF the route is protected --> We should have the USER as part of the REQUEST Object
    console.log("Req.User : ", req.user);
    
    try {
        let me = await User.findById(req.user.id);
        console.log("I am : ", me);
        
        res.status(200).json(me);
    } catch (err) {
        res.status(500).json(err)
    }
}

// @desc    Logout User
// @route   Post /logout  /api/users/logout
// @access  Public
const logout = async (req, res) => {
    // Remove User from Request Object
    req.user = null;
    console.log("Req.User : ", req.user);

    // Invalidate Token (?)
    console.log("Log User Out...");

    res.status(200).json({ message: "User Logged Out"})
}

module.exports = { login, register, getMe, logout };