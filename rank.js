const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

const randomRank = function () {
    const list = [];
    list.push("RANK?");
    list.push("WHAT'S YOUR RANK?");
    list.push("RANK RN");
    list.push("RANK!!!");
    list.push("COME ON, WHAT'S YOUR RANK?");
    return list[Math.floor(Math.random() * list.length)];
}

const execute = async function(interaction){
    await interaction.reply(randomRank());
}

module.exports = {
    execute
}