//add routes
const express = require('express');
const router = express.Router();

// GET /api/v1/messages
router.get('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET messages!',
        data: {
            messages: [
                { id: 1, user: "Hello", message: "World" },
                { id: 2, user: "Food", message: "Bar" }
            ]
        }
    });
});

// POST /api/v1/messages
router.post('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'POST messages!',
        data: { message: { id: 3, user: "Hello", message: "World" } }
    });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET message!',
        data: { message: { id: 1, user: "Hello", message: "World" } }
    });
});

// PUT /api/v1/messages/:id
router.put('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'PUT message!',
        data: { message: { id: 1, user: "Hello", message: "World" } }
    });
});

// DELETE /api/v1/messages/:id
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'DELETE message!',
        data: { message: { id: 1, user: "Hello", message: "World" } }
    });
});


module.exports = router;