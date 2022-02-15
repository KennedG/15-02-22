const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const inlinereply = require('discord-reply'); 

module.exports = {
    config: {
        nome: "top money",
        aliases: ['lb'],
        categoria: 'economy',
        desc: 'Top 10 usuários da economia',
        use: ' ',
        para: "todos"
    }, 
    run: async (bot, message, args) => {
        let money = db.all().filter(data => data.ID.startsWith(`gizmo.`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("GREEN")
                .setFooter("nada aqui")
            return message.lineReply(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : "Invalido#0000"}** \n➥ ${money[i].data} :coin:\n`;
        };

        const embed = new MessageEmbed()
            .setTitle("🏆 Maiores Bolsos")
            .setColor("YELLOW")
            .setThumbnail("https://cdn.discordapp.com/attachments/862566063090171995/878113116691521636/vemx111.gif")
            .setDescription(`Esse é o Ranking dos membros com mais moedas :coin: \n\n` + finalLb)
            .setFooter(bot.user.tag, bot.user.displayAvatarURL())
            .setTimestamp()
        message.lineReply(`${message.author}`, embed); 
    }
};