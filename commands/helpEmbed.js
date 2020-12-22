const { prefix } = require('../config.json');
const Discord = require("discord.js");
const help = require('./help');

module.exports = {
    name: "helpembed",
    description: "The better version of help",
    alias: ["h", "he"],
    usage: "<command?>",
    execute(message, args) {
        //const data = [];
        const { commands } = message.client;

        const helpEmbed = new Discord.MessageEmbed()
            .setColor("0099ff")
            .setTimestamp()
            .setTitle("Help")
            .setFooter(`OoFbot is watching you rage quit discord`)

        if (!args.length) {
            helpEmbed.addField("Command list", `${commands.map(command => command.name).join(', ')}\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`)
            return message.channel.send(helpEmbed)
                
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.alias && c.alias.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        //data.push(`**Name:** ${command.name}`);
        helpEmbed.addField(`**Name**`, `${command.name}`, true);

        if (command.alias) helpEmbed.addField(`**Aliases**`, `${command.alias.join(', ')}`, true);
        // data.push(`**Aliases:** ${command.alias.join(', ')}`);
        if (command.description) helpEmbed.addField(`**Description**`, `${command.description}`, true);
        //data.push(`**Description:** ${command.description}`);
        if (command.usage) helpEmbed.addField(`**Usage**`, `${prefix}${command.name} ${command.usage}`);
        //data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        helpEmbed.addField(`**Cooldown**`, `${command.cooldown || 3}`, true);
        //data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(helpEmbed);
    }
}