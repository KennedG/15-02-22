const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "evalu",
    aliases: ['evalu'],
    run: async (client, message, args) => {
       if (![ '794015673184419881', '493282797222494230'].includes(message.author.id)) return;
    
    let code = args.slice(0).join(" ");
    
    try {
      let ev = require("util").inspect(eval(code))
      
      
      let embed = `\`\`\`js\n ${ev.slice(0, 1950)} \`\`\``
      message.channel.send(embed);
    } catch(err) {
      let erro = `**Eu detectei um erro:**\n\`\`\`js\n ${err} \`\`\``
      
      message.channel.send(erro);
    }
    },
};