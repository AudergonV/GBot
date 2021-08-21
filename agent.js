const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const config = require('./config.json');

const randomAgent = function () {
    const list = [];
    list.push({name: "Brimstone", color: "#992420", imgUrl: "https://static.wikia.nocookie.net/valorant/images/4/4d/Brimstone_icon.png"});
    list.push({name: "Viper", color: "#42f557", imgUrl: "https://static.wikia.nocookie.net/valorant/images/5/5f/Viper_icon.png"});
    list.push({name: "Omen", color: "#1d2066", imgUrl: "https://static.wikia.nocookie.net/valorant/images/b/b0/Omen_icon.png"});
    list.push({name: "Killjoy", color: "#fff700", imgUrl: "https://static.wikia.nocookie.net/valorant/images/1/15/Killjoy_icon.png"});
    list.push({name: "Cypher", color: "#e3d586", imgUrl: "https://static.wikia.nocookie.net/valorant/images/8/88/Cypher_icon.png"});
    list.push({name: "Sova", color: "#86cfe3", imgUrl: "https://static.wikia.nocookie.net/valorant/images/4/49/Sova_icon.png"});
    list.push({name: "Sage", color: "#6ee4ff", imgUrl: "https://static.wikia.nocookie.net/valorant/images/7/74/Sage_icon.png"});
    list.push({name: "Pheonix", color: "#ffad29", imgUrl: "https://static.wikia.nocookie.net/valorant/images/1/14/Phoenix_icon.png"});
    list.push({name: "Jett", color: "#f2ffff", imgUrl: "https://static.wikia.nocookie.net/valorant/images/3/35/Jett_icon.png"});
    list.push({name: "Reyna", color: "#ba1eb5", imgUrl: "https://static.wikia.nocookie.net/valorant/images/b/b0/Reyna_icon.png"});
    list.push({name: "Raze", color: "#992420", imgUrl: "https://static.wikia.nocookie.net/valorant/images/9/9c/Raze_icon.png"});
    list.push({name: "Breach", color: "#992420", imgUrl: "https://static.wikia.nocookie.net/valorant/images/5/53/Breach_icon.png"});
    list.push({name: "Skye", color: "#6fba3d", imgUrl: "https://static.wikia.nocookie.net/valorant/images/3/33/Skye_icon.png"});
    list.push({name: "Yoru", color: "#3261ed", imgUrl: "https://static.wikia.nocookie.net/valorant/images/d/d4/Yoru_icon.png"});
    list.push({name: "Astra", color: "#8f5cff", imgUrl: "https://static.wikia.nocookie.net/valorant/images/0/08/Astra_icon.png"});
    list.push({name: "KAY/O", color: "#5cb0ff", imgUrl: "https://static.wikia.nocookie.net/valorant/images/f/f0/KAYO_icon.png"});
    return list[Math.floor(Math.random() * list.length)];
}

const randomEmbed = function() {
    let agent = randomAgent();
    const embed = new MessageEmbed()
    .setColor(agent.color)
    .setTitle(agent.name)
    .setThumbnail(agent.imgUrl);
    return embed;
}

const execute = async function(interaction){
    const button = new MessageButton()
        .setCustomId('reroll')
        .setLabel('Re-roll')
        .setStyle('SECONDARY')
        .setEmoji(config.emojis.excuseme);
    const row = new MessageActionRow()
        .addComponents(
            button
        );

    const collector = interaction.channel.createMessageComponentCollector({ time: 60000 });

    collector.on('collect', async i => {
    if (i.customId === 'reroll') {
            await i.update({ embeds: [randomEmbed()], components: [row] });
        }
    });
    await interaction.reply({ embeds: [randomEmbed()], components: [row] });
    
}

module.exports = {
    execute
}