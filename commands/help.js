const { prefix } = require('../config.json');

module.exports = {
    name: "help",
    description: "What do u think it does?",
    alias: ["commands", "cmd"],
    usage: "<command?>",
    execute(message, args) {
        const data = [];
        const { commands } = message.client;

        if (!args.length) {
            data.push('Here\'s a list of all my commands:');
            data.push(commands.map(command => command.name).join(', '));
            data.push(`\nYou can send \`${prefix}help [command name]\` to get info on a specific command!`);

            return message.channel.send(data, { split: true })
                
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name) || commands.find(c => c.alias && c.alias.includes(name));

        if (!command) {
            return message.reply('that\'s not a valid command!');
        }

        data.push(`**Name:** ${command.name}`);

        if (command.alias) data.push(`**Aliases:** ${command.alias.join(', ')}`);
        if (command.description) data.push(`**Description:** ${command.description}`);
        if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`);

        data.push(`**Cooldown:** ${command.cooldown || 3} second(s)`);

        message.channel.send(data, { split: true });
    }
}