const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    
    let user = message.author;
    
    let author = await db.fetch(`worktimer.${user.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        message.reply(`❌ | ${message.author} Você já trabalhou recentemente! volte  novamente em **${time.minutes} minutos ${time.seconds} segundos**`);
        
        message.channel.send({content: `${user}`, embeds: [timeEmbed] });
    } else {

        let replies = ['Programador (a)','Construtor (a)','Agricultor (a)','Garoto(a) de Programa','Garçom','Mecanico (a)','Cozinheiro (a)',
                      'Vendedor (a)','Barqueiro (a)','Youtuber','Padeiro (a)']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 9000) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("<:coinGizmo:940747974206713886> | Trabalho efetuado com sucesso!")
        .setColor("#0060EE")
        .setDescription(`${message.author} trabalhou como **${replies[result]}** e ganhou: <:coinGizmo:940747974206713886> **${amount}** Gizmo coins!`)
        .setFooter("Você acabou de trabalhar!")
        .setTimestamp();

        message.channel.send({content: `${user}`, embeds: [embed1] });
        
        db.add(`gizmo.${user.id}`, amount);
        db.set(`worktimer.${message.author.id}`, Date.now())
    };
}