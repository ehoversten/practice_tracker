// const Practice = require('../models');
const Practice = require('../models/Practice');
const mongoose = require('mongoose');
// const express = require('express');

// get all practice sessions
const getAllSessions = async (req, res) => {

    try {
        let allSessions = await Practice.find({}).sort({ createdAt: -1 });
        res.status(200).json(allSessions);
    } catch(err) {
        res.status(400).json({ error: err.message });
    }

}

// get a single practice session
const getSingleSession = async (req, res) => {
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
}

// create a new practice session
const createSession = async (req, res) => {
    const {title, duration, worked_on } = req.body;
    // console.log(title, duration, worked_on);

    try {
        const session = await Practice.create({title, duration, worked_on});
        res.status(201).json(session)
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}
// update a practice session
const updateSession = async (req, res) => {
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
}

// delete a practice session
const deleteSession = async (req, res) => {
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
}

module.exports = { 
    getAllSessions, 
    getSingleSession, 
    createSession, 
    updateSession, 
    deleteSession 
}