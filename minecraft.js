const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const util = require('minecraft-server-util');
const config = require('./config.json');

const execute = async function(interaction){
    let status = false;
    let response;
    await util.status(config.minecraft.url)
    .then((res) => {
        response = res.rawResponse;
        status = true;
    })
    .catch((error) => {
        response = error;
    });

    let embed;
    if (status) {
        embed = new MessageEmbed()
        .setColor('#00c224')
        .setTitle(`${config.minecraft.name} [${config.minecraft.url}]`)
        .setAuthor('Minecraft server', `${config.images.minecraft_logo}`)
        .setURL(config.dynmap)
        .addFields(
            { name: 'Status', value: `✅ Online` },
            { name: 'Players', value:`${ response.players.online}/${response.players.max}`},
            { name: 'Version', value: response.version.name }
        )
    }else{
        embed = new MessageEmbed()
        .setColor('#e82333')
        .setTitle(`${config.minecraft.name} [${config.minecraft.url}]`)
        .setAuthor('Minecraft server', `${config.images.minecraft_logo}`)
        .setURL(config.dynmap)
        .addFields(
            { name: 'Status', value: `⭕ Offline` },
        )
    }
    await interaction.reply({ embeds: [embed] });
}

module.exports = {
    execute
}