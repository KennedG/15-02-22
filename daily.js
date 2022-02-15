const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "daily",
    run: async (client, message, args) => {
       function ms(ms) {
const seconds = ~~(ms/1000)
const minutes = ~~(seconds/60)
const hours = ~~(minutes/60) 
const days = ~~(hours/24)
return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }}


let save_timer_daily = db.fetch(`dtimer.${message.author.id}`)

let tempoMs = 86400000;
let saveDbMS = await save_timer_daily
let tempo = ms(tempoMs - (Date.now() - saveDbMS))

if(tempo.minutes > 0 || tempo.seconds > 0){
    
    
  message.reply(`Ops ${message.author}!\nVocê só pode coletar seu daily uma vez por dia! Volte amanhã e tente novamente.`)
} else{
    
    let rand = Math.floor(Math.random() * 10000) + 100
    
    const embed = new MessageEmbed()
    .setColor(`#0060EE`)
    .setTitle(`<:coinGizmo:940747974206713886> | Presente Diário!`)
    .setDescription(`${message.author}! Você coletou seu Daily e ganhou \`${rand}\` Gizmo coins!`)
    .setFooter(`Pedido por: ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }));
    
    
    message.reply({embeds: [embed]})
    
    
    
    db.set(`dtimer.${message.author.id}`, Date.now())
    
    db.add(`gizmo.${message.author.id}`, parseInt(rand))
}
    },
};
