const config = require('./config.json');
const Discord = require('discord.js');
const prefix = config.prefix;
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`${client.user.tag} has successfully booted up.`);
    client.user.setActivity('your tears', { type: 'LISTENING' });
  });

  //test command
  client.on('message', message => {
    if (message.content === `${prefix}status`) {
      message.channel.send('fuck you');
    }
  });

//Heads or tails

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  const argsHT = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandHT = argsHT.shift().toLowerCase();

  if (commandHT === 'flip') {
    const acceptedRepliesHT = ['heads', 'tails'];

    const choiceHT = argsHT[0];
    if (!choiceHT) return message.channel.send(`How to play: \`${prefix}flip <heads|tails>\``);
    if (!acceptedRepliesHT.includes(choiceHT)) return message.channel.send(`Only these responses are accepted: \`${acceptedRepliesHT.join(', ')}\``);

      if (choiceHT === 'heads') {
        return message.reply(`The coin flipped tails, you lost!`)
      }
      else if (choiceHT === 'tails') {
        return message.reply(`The coin flipped heads, you lost!`)
      }
  }
});

client.login(config.token);
  
