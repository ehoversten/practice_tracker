// -- getAllUsers, getSingleUser, createUser, updateUser, deleteUser -- //
const User = require('../models/User');
// const model = require('../models');

const getAllUsers = async (req, res) => {
    try {
        let allUsers = await User.find();
        // console.log(allUsers);

        res.status(200).json(allUsers);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
}

const getSingleUser = (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User GET ONE Route");
}

const createUser = async (req, res) => {
    const { username, email, password } = req.body;
    // console.log(username, email, password);

    try {
        // Create New User
        let newUser = await User.create(req.body);
        // console.log("New user created");

        res.status(201).json(newUser);
    } catch (err) {
        // throw Error(err);
        res.status(400).json({ error: err.message });
    }
}

const updateUser = (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User PUT Route");
}

const deleteUser = (req, res) => {
    console.log(`ID: ${req.params.id}`);
    res.send("User DELETE Route");
}


module.exports = { 
    getAllUsers, 
    getSingleUser, 
    createUser, 
    updateUser,
    deleteUser 
 };