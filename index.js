// this is our configuration file. ye i dont change that 
//i am on the bot vc
const config = require('./config.json');
//this is discord's javascript package.
const Discord = require('discord.js');
//this goes in front of your message to call the bot.
const statusMsg = require('./statusMessages.json');
var prefix = config.prefix;
const client = new Discord.Client();

const helpEmbed = new Discord.MessageEmbed()
  .setColor('#f50f1a')
  .setTitle('**OoF_bot Help**')
  .setThumbnail('https://i.imgflip.com/26iqx5.jpg')
  .setDescription(`RREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE`)
  .addFields(
    { name: 'prefix:', value: `\`${prefix}\``},
    { name: 'Check if the bot is online', value: `\`${prefix}status\`` },
    { name: 'Play Heads or Tails', value: `\`${prefix}flip <heads|tails>\``},
    { name: 'Create a poll', value: `\`${prefix}poll\``},
    { name: ":warning:Experimental:warning:\nChange Prefix", value: `\`${prefix}prefix\``}
);

//change rich prescence here
client.on('ready', () => {
  console.log(`${client.user.tag} has successfully booted up.`);
  client.user.setActivity('you rage quit discord', { type: 'WATCHING' });
});

//test command, check if bot is online.
client.on('message', message => {
  if (message.content === `${prefix}status`) {
    message.channel.send(statusMsg[Math.floor(Math.random() * Object.keys(statusMsg).length)]);
  }
});

client.on('message', message => {
  if (message.content === `${prefix}help`) {
    message.channel.send(helpEmbed);
  }
});

//Heads or tails
client.on('message', message => {
  //if a bot tried to flip the coin, it doesn't execute the code
  if (message.author.bot) return;
  //if it doesn't have the prefix as the first letter it doesn't execute the code
  if (message.content.indexOf(prefix) !== 0) return;
  //puts the first word in the message into a variable and turns it to lowercase
  const argsHT = message.content.slice(prefix.length).trim().split(/ +/g);
  const commandHT = argsHT.shift().toLowerCase();
  //if the command is flip, it checks what the accepted replies are and makes it's choice on what to send based on them.
  if (commandHT === 'flip') {
    const acceptedRepliesHT = ['heads', 'tails'];

    const choiceHT = argsHT[0];
    //if the choice isn't either heads or tails it tells you to say heads or tails, if it doesn't say anything it tells you how to play.
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

//Change prefix (by Aadi)
client.on("message", message => {
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
});

client.on('message', message => {
  const commandForPoll = `${prefix}poll`;
  if (message.content.startsWith(commandForPoll)) {
    message.react('780508306149605377');
    message.react('780508365020332072');
  }
});

//Logs into discord using the token in the ./config.json file
client.login(config.token);

//ahsan r u here?