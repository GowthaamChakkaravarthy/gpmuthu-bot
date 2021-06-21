const {Client,MessageEmbed,MessageAttachment} = require('discord.js');
const dotenv = require('dotenv');
const env=process.env
dotenv.config();

const client = new Client();

const BotToken=env.BOT_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('oombuley sethe payale');
  }

  
  if (msg.content === 'av') {
    // Send the user's avatar URL
    const authorName=msg.author.username
    const embed = new MessageEmbed().setTitle(authorName).setColor(0xff0000).setDescription(msg.author.displayAvatarURL());
    msg.reply(embed);
  }

  if (msg.content === 'thalaivare') {
    // Send the user's avatar URL
    const authorName=msg.author.username
    const embed = new MessageEmbed().setTitle(authorName).setColor(0xff0000).setDescription("nakku ley setha payale");
    msg.reply(embed);
    
  }
  if (msg.content ===  'gif') {
    // Create the attachment using MessageAttachment
    const attachment = new MessageAttachment('https://i.imgur.com/w3duR07.png');
    // Send the attachment in the message channel
    msg.channel.send(`${msg.author},`, attachment);
  }
});

client.login(BotToken);