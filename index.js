const config = require('./config.json');
const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
    console.log(`${client.user.tag} has successfully booted up.`);
    client.user.setActivity('your tears', { type: 'LISTENING' });
  });


client.login(config.token);
  
