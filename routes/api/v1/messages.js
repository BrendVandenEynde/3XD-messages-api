//add routes
const express = require('express');
const router = express.Router();

// GET /api/v1/messages
router.get('/', (req, res, next) => {
    res.status(200).json({ 
        status: "success",
        message: 'GET messages!',
        data: { messages: [
            { id: 1, title: "Hello", body: "World" },
            { id: 2, title: "Food", body: "Bar" }
        ] }
     });
});

module.exports = router;