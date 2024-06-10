const express = require('express');
const router = express.Router();
const thoughtController = require('../controllers/thoughtController');

router.get('/', thoughtController.getAllThoughts);
router.post('/', thoughtController.createThought);
router.get('/:id', thoughtController.getThoughtById);
router.put('/:id', thoughtController.updateThoughtById);
router.delete('/:id', thoughtController.deleteThoughtById);
router.post('/:id/reactions', thoughtController.addReaction);
router.delete('/:id/reactions/:reactionId', thoughtController.deleteReaction);

module.exports = router;
