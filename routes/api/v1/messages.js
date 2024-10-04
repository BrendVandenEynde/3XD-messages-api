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
                { id: 1, title: "Hello", body: "World" },
                { id: 2, title: "Food", body: "Bar" }
            ]
        }
    });
});

// POST /api/v1/messages
router.post('/', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'POST messages!',
        data: { message: { id: 3, title: "Hello", body: "World" } }
    });
});

// GET /api/v1/messages/:id
router.get('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'GET message!',
        data: { message: { id: 1, title: "Hello", body: "World" } }
    });
});

// PUT /api/v1/messages/:id
router.put('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'PUT message!',
        data: { message: { id: 1, title: "Hello", body: "World" } }
    });
});

// DELETE /api/v1/messages/:id
router.delete('/:id', (req, res, next) => {
    res.status(200).json({
        status: "success",
        message: 'DELETE message!',
        data: { message: { id: 1, title: "Hello", body: "World" } }
    });
});


module.exports = router;