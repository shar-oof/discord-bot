module.exports = {
    name: "flip",
    alias: ["heads-or-tails"],
    args: true,
    usage: "<heads|tails>",
    execute(message, args) {
        if (args == 'heads') {
            return message.reply(`The coin flipped tails, you lost!`)
        }
        else if (args == 'tails') {
            return message.reply(`The coin flipped heads, you lost!`)
        }
    }
}