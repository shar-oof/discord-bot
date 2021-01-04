const { GuildMember } = require("discord.js")

module.exports = {
    name: "hi",
    description: "Give/return role ids",
    execute(message, args) {
        if (args[0] == "give") {
            const role = message.guild.roles.cache.find(role => role.name === `${args[1]}`);
            const member = message.mentions.members.first();  
            member.roles.add(role);
            message.channel.send("Hello");
        }
    }
}