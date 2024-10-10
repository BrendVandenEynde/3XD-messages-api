// Add routes
const express = require('express');
const router = express.Router();

//require messageController
const messageController = require('../../../controllers/api/v1/message.js');

// Sample data
const messages = [
    { id: 1, user: "Joris", message: "We got this" },
    { id: 2, user: "Arne", message: "Yes we do!" },
    { id: 3, user: "Brend", message: "Oh no..." },
    { id: 4, user: "Roger", message: "We will be fine" },
];

// GET /api/v1/messages
router.get('/', messageController.index);

// GET /api/v1/messages/:id
router.get('/:id', messageController.show);

// POST /api/v1/messages
router.post('/', messageController.create);

// PUT: /api/v1/messages/:id
router.put('/:id', messageController.update);

// DELETE: /api/v1/messages/:id
router.delete('/:id', messageController.delete);

module.exports = router;
