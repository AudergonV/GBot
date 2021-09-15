const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('./config.json');

const execute = async function(interaction){
    await interaction.reply(config.dynmap);
}

module.exports = {
    execute
}