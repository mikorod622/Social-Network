const Thought = require('../models/Thought');

exports.getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.status(200).json(thoughts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createThought = async (req, res) => {
    try {
        const newThought = new Thought(req.body);
        await newThought.save();
        res.status(201).json(newThought);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.status(200).json(thought);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findByIdAndDelete(req.params.id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        res.status(200).json({ message: 'Thought deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        thought.reactions.push(req.body);
        await thought.save();
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteReaction = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ error: 'Thought not found' });
        }
        thought.reactions.id(req.params.reactionId).remove();
        await thought.save();
        res.status(200).json(thought);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
