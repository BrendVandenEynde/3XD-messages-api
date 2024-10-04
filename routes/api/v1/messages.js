// Add routes
const express = require('express');
const router = express.Router();

// Sample data
const messages = [
    { id: 1, user: "Joris", message: "We got this" },
    { id: 2, user: "Arne", message: "Yes we do!" },
    { id: 3, user: "Brend", message: "Oh no..." },
    { id: 4, user: "Roger", message: "We will be fine" },
];

// GET /api/v1/messages
router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET messages!',
        data: {
            messages: messages
        }
    });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id); // Parse the ID from the request parameters
    const message = messages.find(msg => msg.id === id); // Find the message by ID

    if (message) {
        res.status(200).json({
            status: "success",
            message: 'GET message with id ' + id,
            data: {
                message: message
            }
        });
    } else {
        res.status(404).json({
            status: "error",
            message: "Message not found"
        });
    }
});

// POST /api/v1/messages
router.post('/', (req, res, next) => {
    const { user, text } = req.body.message; // Get user and text from the request body

    // Calculate the new ID based on the highest current ID
    const newId = messages.length > 0 ? Math.max(...messages.map(msg => msg.id)) + 1 : 1;

    // Create the new message object
    const newMessage = {
        id: newId,  
        user: user,
        message: text
    };

    // Add the new message to the messages array
    messages.push(newMessage);

    res.status(201).json({
        status: "success",
        message: 'Message added!',
        data: {
            message: newMessage
        }
    });
});



module.exports = router;