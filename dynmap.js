const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('./config.json');

const execute = async function(interaction){
    const embed = new MessageEmbed()
    .setColor('#00c224')
    .setTitle("Click here")
    .setAuthor('Dynmap', `${config.images.minecraft_logo}`)
    .setURL(config.dynmap)
    await interaction.reply({ embeds: [embed] });
}

module.exports = {
    execute
}