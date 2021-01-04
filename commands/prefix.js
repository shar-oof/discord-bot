var prefixes = require("./prefixes.json");
const fs = require("fs");

module.exports = {
    name: "prefix",
    description: "Query or change the prefix",
    cooldown: 3, //in seconds
    args3: true,
    execute(message, args, prefix) {
        if (!message.author.id == 'TheNerd#7030') return message.channel.reply("U R NOT AUTHORISED");

        console.log("                                       ARGS:" + args)

        if (args == "") {
            return message.channel.send(`The prefix is \`${prefix}\``);
        }
        else{
            console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII" + args[0])
            prefixes[message.guild.id].guildPrefix = args[0];
    
            fs.writeFile("./prefixes.json", JSON.stringify(prefixes, null, 2), (err) => {
                if (err) console.log(err);
            })

            return message.channel.send(`The prefix is \`${prefixes[message.guild.id].guildPrefix}\``);
        }
    }
}