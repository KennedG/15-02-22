const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
      run: async (client, message, args) => {

const sobre = args.join(' ');
const user = message.author;

if (!sobre) return message.reply(`❌ | ${user} sintaxe incorreta, utilize: \`G!sobremim [Mensagem].\``);

if (sobre.length > 90) return message.channel.send(`❌ | ${message.author} não pode ter mais de 90 Letras!`);

        
db.set(`sobre${user.id}`, sobre);

return message.reply(`${message.author} ✅ **Sobre mim** alterado com sucesso para: \`${sobre}\``);
      }
} 