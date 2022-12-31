// -- getAllUsers, getSingleUser, createUser, updateUser, deleteUser -- //
const User = require('../models/User');
// const model = require('../models');

const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find();

        res.status(200).json(allUsers);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

const getSingleUser = async (req, res) => {
    // console.log(`ID: ${req.params.id}`);

    try {
        let user = await User.findById(req.params.id);
        console.log(user);
        
        res.status(200).json(user);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}

const createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Create New User
        let newUser = await User.create(req.body);

        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const updateUser = async (req, res) => {
    // console.log(`ID: ${req.params.id}`);
    try {
        let user = await User.findByIdAndUpdate(req.params.id);
        console.log(user);
        
        res.status(200).json(user);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}

const deleteUser = async (req, res) => {
    // console.log(`ID: ${req.params.id}`);
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        
        res.status(200).json(user);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
}

module.exports = { 
    getAllUsers, 
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser 
 };