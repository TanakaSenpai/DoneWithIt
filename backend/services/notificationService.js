const { Expo } = require('expo-server-sdk');
const expo = new Expo();

async function sendPushNotification(pushTokens, message) {
    let messages = [];

    for (let token of pushTokens) {
        // Validate push token
        if (!Expo.isExpoPushToken(token)) {
            console.error(`Push token ${token} is not a valid Expo push token.`);
            continue;
        }

        // Create the message
        messages.push({
            to: token,
            sound: "default",
            body: message.body,
            data: message.data,
        });
    }

    let chunks = expo.chunkPushNotifications(messages);
    let tickets = [];

    try {
        for (let chunk of chunks) {
            let ticketChunk = await expo.sendPushNotificationsAsync(chunk);
            tickets.push(...ticketChunk);
        }
    } catch (error) {
        console.error("Error sending notifications:", error);
    }

    return tickets;
}

module.exports = { sendPushNotification };
