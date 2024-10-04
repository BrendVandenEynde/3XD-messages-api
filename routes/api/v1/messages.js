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

module.exports = router;