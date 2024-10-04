const express = require('express');
const Child = require('../models/Child');
const router = express.Router();

// Get all children
router.get('/child', async (req, res) => {
    try {
        const children = await Child.find();
        res.json(children);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get child by ID
router.get('/child/:id', async (req, res) => {
    try {
        const child = await Child.findById(req.params.id);
        if (!child) return res.status(404).json({ message: 'Child not found' });
        res.json(child);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add new child
router.post('/child', async (req, res) => {
    try {
        const child = new Child(req.body);
        await child.save();
        res.status(201).json(child);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update child
router.put('/child/:id', async (req, res) => {
    try {
        const child = await Child.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!child) return res.status(404).json({ message: 'Child not found' });
        res.json(child);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete child
router.delete('/child/:id', async (req, res) => {
    try {
        const child = await Child.findByIdAndDelete(req.params.id);
        if (!child) return res.status(404).json({ message: 'Child not found' });
        res.json({ message: 'Child deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
