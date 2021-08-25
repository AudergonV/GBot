const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');


const execute = async function(interaction){
    await interaction.reply("RANK?");
}

module.exports = {
    execute
}