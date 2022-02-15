const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "atm",
    aliases: ['atmm,trabalhar'],
    run: async (client, message, args) => {
      
let user = message.mentions.users.first() || message.author;

let lews = await db.fetch(`gizmo.${user.id}`)
if(lews == null) lews = 0;

message.reply(`<:coinGizmo:940747974206713886> | **${user.username}** possui \`${lews}\` Gizmo Coins!`)
    },
}; 
