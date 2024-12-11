const express = require('express');
const router = express.Router();
const expoPushToken = require("../models/expoPushToken")

router.post("/", async (req, res) => {
    const { data } = req.body;
    const newData = { token: data.token, userId: data.userId };

    try {
        const result = await expoPushToken.findOneAndUpdate(
            { userId: newData.userId },
            { token: newData.token },   
            { upsert: true, new: true } 
        );
        console.log("Expo push token registered:", result); 
        return res.status(200).json({ message: "Expo push token registered successfully", result });
    } catch (error) {
        console.error("Expo push token error:", error);
        return res.status(500).json({ message: "Failed to register Expo push token" });
    }
});


module.exports = router;
