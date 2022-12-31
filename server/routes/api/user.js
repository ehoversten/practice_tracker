const router = require('express').Router();
const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser } = require('../../controllers/userController');

// -- All routes prefixed with '/api/user'
router.get('/', getAllUsers);

// -- GET ONE
router.get('/:id', getSingleUser);

// -- CREATE 
router.post('/', createUser);

// -- UPDATE
router.put('/:id', updateUser);

// -- DELETE
router.delete('/:id', deleteUser);


module.exports = router;