const Discord = require("discord.js");
const db = require("quick.db");
const ms = require('parse-ms');

exports.run = async (bot, message, args) => {
    
    let user = message.author;
    
    let author = await db.fetch(`loto.${user.id}`)

    let timeout = 3600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        
        let time = ms(timeout - (Date.now() - author));
    
        message.reply(`❌ | ${message.author} Você já jogou recentemente! volte  novamente em **${time.minutes} minutos ${time.seconds} segundos**`);
        
        message.channel.send({content: `${user}`, embeds: [timeEmbed] });
    } else {

        let replies = ['Você ganhou sozinho!','Você ganhou com duas pessoas!','Você ganhou com duas pessoas!','Você ganhou com três pessoas!']
  
        let result = Math.floor((Math.random() * replies.length));

        let amount = Math.floor(Math.random() * 9000) + 1;

        let embed1 = new Discord.MessageEmbed()
        .setTitle("<:coinGizmo:940747974206713886> | Jogo na lotérica efetuado com sucesso!")
        .setColor("#0060EE")
        .setDescription(`${message.author} jogou na lotofácil  e **${replies[result]}** e lucrou: <:coinGizmo:940747974206713886> **${amount}** Gizmo coins!`)
        .setFooter("Você acabou de ganhar na lotérica!")
        .setTimestamp();

        message.channel.send({content: `${user}`, embeds: [embed1] });
        
        db.add(`gizmo.${user.id}`, amount);
        db.set(`loto.${message.author.id}`, Date.now())
    };
}