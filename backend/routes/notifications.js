const express = require('express');
const { sendPushNotification } = require('../services/notificationService');

const router = express.Router();

// POST /notifications/send
router.post('/send', async (req, res) => {
    const { tokens, message } = req.body;

    if (!tokens || tokens.length === 0 || !message) {
        return res.status(400).json({ error: "Tokens and message are required" });
    }

    try {
        const tickets = await sendPushNotification(tokens, message);
        res.status(200).json({ success: true, tickets });
    } catch (error) {
        console.error("Failed to send push notifications:", error);
        res.status(500).json({ success: false, error: error.message });
    }
});

module.exports = router;
