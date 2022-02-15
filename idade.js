const { MessageEmbed } = require('discord.js')
const db = require('quick.db');

module.exports = {
      run: async (client, message, args) => {

const idade = args.join();
const user = message.author;

if(isNaN(idade[0])){
    return message.channel.send(`❌| ${user} sintaxe incorreta, utilize: \`G!idade [Número].\``);
 };

if (!idade) return message.reply(`❌ | ${user} sintaxe incorreta, utilize: \`G!idade [Número].\``);

if (idade.length > 2) return message.channel.send(`❌ | ${message.author} não pode ter mais de 2 números!`);

        
db.set(`idade_${user.id}`, idade);

return message.reply('Idade, alterada com sucesso');
      }
} 
