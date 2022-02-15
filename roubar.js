const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (bot, message, args) => {
  
    let autor = message.author;
    
    let user = message.mentions.users.first();
    
    if(!user) {
        return message.channel.send(` ${autor} Você tem que mencionar um membro para realizar seu roubo!`);
    };

    if(user.id == autor.id){
        return message.channel.send(` ${autor} Você não pode se auto-roubar!`);
    };

    let user_money = await db.fetch(`gizmo.${message.guild.id}_${user.id}`)
    if(user_money == null) user_money = 1;

    let autor_money = await db.fetch(`gizmo.${message.guild.id}_${autor.id}`)
    if(autor_money == null) autor_money = 1;
        
    if(user_money <= 0) {
        return message.channel.send(` ${autor}, Você não pode roubar alguém que não possui dinheiro!`);
    };

    let timeout = 600000;

    let daily = await db.fetch(`rob_${message.guild.id}_${autor.id}`);


    if (daily !== null && timeout - (Date.now() - daily) > 0) {

        let time = ms(timeout - (Date.now() - daily));
  
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#000001")
        .setDescription(` Você já realizou um roubo hoje!\n\nTente novamente daqui a ** ${tempo5.minutes}m ${tempo5.seconds}s**`);
        
        message.channel.send({content: `${autor}`, embeds: [timeEmbed]});
    } else {
        
        let sorte = Math.floor(Math.random() * 4) + 1;
        
        if(sorte == 2) {
            
            let amount = Math.floor(Math.random() * 10000) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("👮 Seu roubo falhou e você foi preso!")
            .setColor("#000001")
            .setDescription(`Você realizou um roubo e não se saiu muito bem!\nE você perdeu um total de **${amount}** Gizmo coins!`);
           
            message.channel.send({content: `${autor}`, embeds: [moneyEmbed]});
            db.subtract(`gizmo.${message.guild.id}_${autor.id}`, amount);
            db.set(`rob_${message.guild.id}_${autor.id}`, Date.now());
        }else{
            
            let amount = Math.floor(Math.random() * 9000) + 1;
            
            let moneyEmbed = new Discord.MessageEmbed()
            .setTitle("🔫 Roubo Realizado Com sucesso!")
            .setColor("#000001")
            .setDescription(`Você roubou o ${user}!\nE você conseguiu uma quantia de **${amount}** Gizmo coins!`);
            
            message.channel.send({content: `${autor}`, embeds: [moneyEmbed]});
            db.add(`gizmo.${message.guild.id}_${autor.id}`, amount);
            db.set(`rob_${message.guild.id}_${autor.id}`, Date.now());
            db.subtract(`gizmo.${message.guild.id}_${user.id}`, amount);
        };
    };
}