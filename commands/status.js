const statusMsg = require("../statusMessages.json")

module.exports = {
    name: "status",
    description: "Check if the bot is online",
    execute(message, args) {
        message.channel.send(statusMsg[Math.floor(Math.random() * Object.keys(statusMsg).length)]);
    }
}