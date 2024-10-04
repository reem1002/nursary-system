const express = require('express');
const Class = require('../models/Class');
const router = express.Router();

// Get all classes
router.get('/class', async (req, res) => {
    try {
        const classes = await Class.find().populate('supervisor').populate('children');
        res.json(classes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get class by ID
router.get('/class/:id', async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id).populate('supervisor').populate('children');
        if (!classData) return res.status(404).json({ message: 'Class not found' });
        res.json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new class
router.post('/class', async (req, res) => {
    try {
        const classData = new Class(req.body);
        await classData.save();
        res.status(201).json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update class
router.put('/class/:id', async (req, res) => {
    try {
        const classData = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!classData) return res.status(404).json({ message: 'Class not found' });
        res.json(classData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete class
router.delete('/class/:id', async (req, res) => {
    try {
        const classData = await Class.findByIdAndDelete(req.params.id);
        if (!classData) return res.status(404).json({ message: 'Class not found' });
        res.json({ message: 'Class deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
