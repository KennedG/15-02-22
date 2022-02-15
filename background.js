const { Message, Client, MessageEmbed } = require("discord.js");
const db = require("quick.db")


module.exports = {
    name: "background",
    run: async (client, message, args) => {
      
let args0 = args.join(" ")
let dindin = db.fetch(`gizmo.${message.author.id}`)
let cidade = 'https://media.discordapp.net/attachments/923403920993288213/940238846153592852/lawn_forest_mountains_144578_3840x2400.jpg?width=759&height=427'
let cave =  'https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427'
let cave2 =  'https://th.bing.com/th/id/R.b34053e65b5e7f7014444dc304ec3917?rik=DbYV7DKlSo1djg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fHncYmkr.jpg&ehk=ek7RTSg%2f%2fpAZFc%2bISd9zYSqx%2f3UjBW9I5LEecW02mH4%3d&risl=&pid=ImgRaw&r=0'
let gamer =  'https://th.bing.com/th/id/OIP.Q1WAZO05swfi1elmAwKIxAHaEK?pid=ImgDet&rs=1'
let programador =  'https://wallpaperaccess.com/full/796843.png'
let kenned = 'https://cdn.discordapp.com/banners/493282797222494230/a_1fda807334db30b9b343608f1b0c2bc7.gif?size=1024'
let trovão = 'https://cdn.discordapp.com/attachments/942587338343710770/942886735199744060/images_3.jpeg'
let minecraft = 'https://cdn.discordapp.com/attachments/916822325712797716/943280222831251556/33daa915df05373e1cd4cf5c2339c297.gif'

if(args0==='Cidade'){
  if(dindin<15000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`, 15000)

  db.set(`bg.${message.author.id}`, cidade)
}

if(args0==='Minecraft'){
  if(dindin<15000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`, 15000)

  db.set(`bg.${message.author.id}`, minecraft)
}

if(args0==='Cave'){
  if(dindin<50000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`, 50000)

  db.set(`bg.${message.author.id}`, cave)
}
if(args0==='Cave2'){
  if(dindin<1000000) return message.reply(`Ops ${message.author} voce não possui Gizmo coins suficiente!`)

  message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
  db.subtract(`gizmo.${message.author.id}`,1000000)

  db.set(`bg.${message.autjor.id}`, cave2)
}
if(args0==='Gamer'){
    if(dindin<1500000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
  
    message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
    db.subtract(`gizmo.${message.author.id}`, 1500000)
  
    db.set(`bg.${message.author.id}`, gamer)
  }
  if(args0==='Programador'){
    if(dindin<1500000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
  
    message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
    db.subtract(`gizmo.${message.author.id}`, 1500000)
  
    db.set(`bg.${message.author.id}`, programador)
  }
  if(args0==='Kenned'){
    if(dindin< 1) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
  
    message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
    db.subtract(`gizmo.${message.author.id}`, 1)
  
    db.set(`bg.${message.author.id}`, kenned)
  }

  if(args0==='Trovão'){
    if(dindin<200000) return message.reply(`Ops ${message.author} você não possui Gizmo coins suficiente!`)
  
    message.reply('<:dcl_ypSino:914350019182723122> | Background setado com sucesso!')
    db.subtract(`gizmo.${message.author.id}`, 200000)
  
    db.set(`bg.${message.author.id}`, trovão)
  }

if(!args0){
       const embed = new MessageEmbed()
   .setColor(`#0060EE`)
  .setTitle(`📣 | Loja de Backgrounds!`)
.setDescription(`> **Background #1**\n**Nome: \`Cidade\`**\n**Preço: \`15 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940238846153592852/lawn_forest_mountains_144578_3840x2400.jpg?width=759&height=427)**\n> **Background #2**\n**Nome: \`Minecraft\`**\n**Preço: \`15 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/916822325712797716/943280222831251556/33daa915df05373e1cd4cf5c2339c297.gif)**\n> **Background #3**\n**Nome: \`Cave\`**\n**Preço: \`50 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://media.discordapp.net/attachments/923403920993288213/940239455581798461/wp4698347.jpg?width=759&height=427)**\n> **Background #4**\n**Nome: \`Cave2\`**\n**Preço: \`100 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/916822325712797716/940762062513131560/wp9371401.png)\n> **Background #5**\n**Nome: \`Gamer\`**\n**Preço: \`150 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://th.bing.com/th/id/OIP.Q1WAZO05swfi1elmAwKIxAHaEK?pid=ImgDet&rs=1)\n> **Background #6**\n**Nome: \`Programador\`**\n**Preço: \`150 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://wallpaperaccess.com/full/796843.png)**\n> **Background #7**\n**Nome: \`Trovão\`**\n**Preço: \`200 mil Gizmo coins\`**\n**Preview: [Clique Aqui](https://cdn.discordapp.com/attachments/942587338343710770/942886735199744060/images_3.jpeg)**`)
         .setFooter(`Para comprar utilize G!background <nome>`);

message.reply({embeds: [embed]})
}
    },
};