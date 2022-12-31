const router = require('express').Router();
const Practice = require('../../models/Practice');
const mongoose = require('mongoose');
const {
    getAllSessions, 
    getSingleSession, 
    createSession, 
    updateSession, 
    deleteSession
} = require('../../controllers/practiceController');


// -- All routes prefixed with '/api/practice'
router.get('/', getAllSessions);

// -- GET ONE
router.get('/:id', getSingleSession);

// -- CREATE 
router.post('/', createSession);

// -- UPDATE
router.put('/:id', updateSession); 

// -- DELETE
router.delete('/:id', deleteSession);

module.exports = router;