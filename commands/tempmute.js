const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("De hebt niet de benodigde rechten");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(member => member.name === args[0]));
  if(!tomute) return message.reply("Die gebruiker is niet gevonden!");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Die gebruiker is een administrator");
  let muterole = message.guild.roles.find(muterole => muterole.name === "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("Geef een tijd op");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Mute is voorbij!!`);
  }, ms(mutetime));


//end of module
}

module.exports.help = {
  name: "tempmute"
}