const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
      run: async (client, message, args) => {

const nome = args.join(' ');
const user = message.author;

if (!nome) return message.reply(`❌ | ${user} sintaxe incorreta, utilize: \`G!nome [Mensagem].\``);

if (nome.length > 20) return message.channel.send(`❌ | ${message.author} não pode ter mais de 20 Letras!`);

        
db.set(`nome_${user.id}`, nome);

return message.reply(`${message.author} nome alterado com sucesso para: \`${nome}\``);
      }
} 