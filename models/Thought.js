const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema({
    reactionBody: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const thoughtSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    thoughtText: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
});

module.exports = mongoose.model('Thought', thoughtSchema);
