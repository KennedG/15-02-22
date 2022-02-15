const db = require('quick.db');
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

      message.delete();
      let user = message.mentions.users.first() ||  message.author;
      let quantidade = args[1]
              if (!message.member.hasPermission("")) return message.channel.send(`:dedo: Você não tem permissão para usar este comando`);
        if(user.bot)return message.channel.send(`bots não tens money`)
        if(!quantidade) return message.channel.send(`digite uma quantia!`)
  
      let money = db.add(`gizmo.${message.guild.id}${user.id}, quantidade`)
        if(money === null) money = 0;

    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(`:Modouro: O Staff: ${message.author} setou a quantia de: R$${quantidade}
        \n :money: Dinheiro setado em:** ${user}`)
    .setTimestamp();

    message.channel.send(embed);
}