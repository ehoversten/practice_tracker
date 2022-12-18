const Practice = require('../../models/Practice');
const mongoose = require('mongoose');
const {
    getAllSessions, 
    getSingleSession, 
    createSession, 
    updateSession, 
    deleteSession
} = require('../../controllers/practiceController');
const router = require('express').Router();

// -- All routes prefixed with '/api/practice'
// router.get('/', getAllSessions);
router.get('/', async (req, res) => {
    try {
        let allSessions = await Practice.find();
        // let allSessions = await Practice.find({}).sort({ createdAt: -1 });
        res.status(200).json(allSessions);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
});


// -- GET ONE
// router.get('/:id', getSingleSession);
router.get('/:id', async (req, res) => {
    console.log(`ID: ${req.params.id}`);
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No resource found' });
    }

    try {
        let session = await Practice.findById(id);

        if(!session) {
            return res.status(404).json({ error: 'No resource found' });
        }

        res.status(200).json(session);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

// -- CREATE 
// router.post('/', createSession);
router.post('/', async (req, res) => {
    const {title, duration, worked_on } = req.body;
    console.log(title, duration, worked_on);

    try {
        const session = await Practice.create({title, duration, worked_on});
        res.status(201).json(session)
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

// -- UPDATE
// router.put('/:id', updateSession); 
router.put('/:id', async (req, res) => {
    console.log(`ID: ${req.params.id}`);
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No resource found' });
    }

    try {
        let session = await Practice.findOneAndUpdate({_id: id}, { ...req.body });

        if(!session) {
            return res.status(404).json({ error: 'No resource found' });
        }

        res.status(200).json(session);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});

// -- DELETE
// router.delete('/:id', deleteSession);
router.delete('/:id', async (req, res) => {
    console.log(`ID: ${req.params.id}`);
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No resource found' });
    }

    try {
        let session = await Practice.findByIdAndDelete({_id: id});

        if(!session) {
            return res.status(404).json({ error: 'No resource found' });
        }

        res.status(200).json(session);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
});


module.exports = router;