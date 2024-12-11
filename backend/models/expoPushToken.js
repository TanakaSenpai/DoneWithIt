const mongoose = require('mongoose');

const expoPushTokenSchema = new mongoose.Schema({
    token: {type: String, required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "User", required: true},
    createdAt: { type: Date, default: Date.now },
})

const ExpoPushToken = mongoose.model("ExpoPushToken", expoPushTokenSchema);
module.exports = ExpoPushToken;
