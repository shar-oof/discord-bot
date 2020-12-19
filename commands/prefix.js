const { execute } = require("./status");

module.exports = {
    name: "prefix",
    description: "Query or change the prefix",
    cooldown: 300, //in seconds
    execute(message, args) {
        if (message.author.bot) return;

        if (message.content.indexOf(prefix) != 0) return;
        const argsCP = message.content.slice(prefix.length).trim().split(/ +/g);
        const commandCP = argsCP.shift().toLowerCase();

        if (commandCP == "prefix" && argsCP.length == 0){
            return message.reply(`The prefix is \`${prefix}\``)
        }
        else if(commandCP == "prefix"){
            prefix = argsCP[0]
            return message.reply(`The prefix is now \`${prefix}\``)
        }
    }
}