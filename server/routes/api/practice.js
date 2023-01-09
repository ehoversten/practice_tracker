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
// -- Auth Middleware -- // 
const isAuthorized = require('../../utils/auth');
// -- Require authorization to query for ALL routes -- //
router.use(isAuthorized);

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
// router.delete('/:id', isAuthorized, deleteSession);

module.exports = router;