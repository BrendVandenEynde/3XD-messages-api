// Sample data moved from routes to the controller
const messages = [
    { id: 1, user: "Joris", message: "We got this" },
    { id: 2, user: "Arne", message: "Yes we do!" },
    { id: 3, user: "Brend", message: "Oh no..." },
    { id: 4, user: "Roger", message: "We will be fine" },
];

// Controller methods
const index = (req, res, next) => {
    const user = req.query.user; // Get the user query parameter

    if (user) {
        const userMessages = messages.filter(msg => msg.user === user); // Filter messages by user

        res.status(200).json({
            status: "success",
            message: 'GET messages by user ' + user,
            data: {
                messages: userMessages
            }
        });
    } else {
        res.status(200).json({
            status: "success",
            message: 'GET messages!',
            data: {
                messages: messages // Return all messages if no user query parameter is provided
            }
        });
    }
}

const show = (req, res, next) => {
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
}

const create = (req, res, next) => {
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
}

const update = (req, res, next) => {
    const id = parseInt(req.params.id); // Parse the ID from the request parameters
    const message = messages.find(msg => msg.id === id); // Find the message by ID

    if (message) {
        const { user, text } = req.body.message; // Get user and text from the request body

        message.user = user;
        message.message = text;

        res.status(200).json({
            status: "success",
            message: 'Message updated!',
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
};

const remove = (req, res, next) => {
    const id = parseInt(req.params.id); // Parse the ID from the request parameters
    const messageIndex = messages.findIndex(msg => msg.id === id); // Find the index of the message by ID

    if (messageIndex !== -1) {
        messages.splice(messageIndex, 1); // Remove the message from the array

        res.status(200).json({
            status: "success",
            message: 'Message is deleted!'
        });
    } else {
        res.status(404).json({
            status: "error",
            message: "Message not found"
        });
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    delete: remove
};