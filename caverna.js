const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "caverna",
    run: async (client, message, args) => {
       function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)
return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}


let save_timer_daily = db.fetch(`cristaistimer.${message.author.id}`)

let tempoMs = 3600000;
let saveDbMS = await save_timer_daily
let tempo = ms(tempoMs - (Date.now() - saveDbMS))

if(tempo.minutes > 0 || tempo.seconds > 0){
    
    
  message.reply(`Ops ${message.author}!\nEspere mais **${tempo.minutes} minutos** e **${tempo.seconds} segundos** para entrar na caverna novamente!`)
} else{
    
    let rand = Math.floor(Math.random() * 10) + 10
    
    const embed = new MessageEmbed()
    .setColor(`#0060EE`)
    .setTitle(`<:az_cristal_old:940749107377627186> | Cristais!`)
    .setDescription(`**${message.author}!** Você entrou na caverna e ganhou **${rand} cristais!**`)
    .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
    
    
    message.reply({embeds: [embed]})
    
    
    db.set(`cristaistimer.${message.author.id}`, Date.now())
    
    db.add(`cristais_${message.author.id}`, parseInt(rand))
}
    },
};
