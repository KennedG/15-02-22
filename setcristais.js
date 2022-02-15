const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db");

        module.exports = {
            config: {
                name: "addmoney",
                category: "economy",
                description: "Adiciona dinheiro a um usuário",
            },
           run: async (client, message, args, storage) => {

 
              if (!['493282797222494230',].includes(message.author.id))
      return message.reply(
        "❌Apenas o criador do bot pode utilizar esse comando!")
                if (!args[0]) return message.channel.send("❌ **Mencione um usuário!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Mencione um usuário valido!**")
        if (!args[1]) return message.channel.send("**Insira um valor!**")
        if (isNaN(args[1])) return message.channel.send(`**❌ Esse valor não é um número!**`);
        if (args[0] > 10000) return message.channel.send("**❌ Não é possível adicionar esse tanto de valor!**")
        db.add(`cristais_${user.id}`, args[1])
        

        let moneyEmbed = new MessageEmbed()
            .setColor("WHITE")
            .setDescription(`✅ Adicionado ${args[1]} Cristais`);
        message.channel.send({embeds: [moneyEmbed]})
  }
        }