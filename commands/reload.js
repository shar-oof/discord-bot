module.exports = {
    name: "reload",
    alias: ["r"],
    description: "Reloads commands",
    usage: "<command>",
    //args: true,
    execute(message, args){
        if (!args.length) return message.reply(`You didn't pass any command to reload!`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName) || message.client.commands.find(cmd => cmd.alias && cmd.alias.includes(commandName));

        if (!command) return message.reply(`There is no command with name or alias \`${commandName}\`!`);
        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            var newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.reply(`Command \`${command.name}\` was reloaded!`);
        } catch (error) {
            console.error(error);
            message.reply(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
        }
    }
}//https://github.com/shar-oof/discord-bot.git