const { Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const {token} = require('./config.json');
require('./lstools.js');
const agent = require('./agent');
const rank = require('./rank');
const dynmap = require('./dynmap');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'agent') {
    agent.execute(interaction);
  }
  if (interaction.commandName === 'rank'){
    rank.execute(interaction);
  }
  if (interaction.commandName === 'dynmap'){
    dynmap.execute(interaction);
  }
});



client.login(token);