// Add routes
const express = require('express');
const router = express.Router();

//require messageController
const messageController = require('../../../controllers/api/v1/message.js');

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
