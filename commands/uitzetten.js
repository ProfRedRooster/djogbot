const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

 message.delete();
 const member = message.guild.member(message.author);
if(!message.guild.member(message.author).hasPermission('MANAGE_WEBHOOKS')) {
  message.channel.send(":x: Geen toegang. :x:") 
 return console.log("---IEMAND HEEFT GEPROBEERD DE BOT TE STOPPEN---");
}
message.reply("Bot wordt uitgezet voor **5 minuten**");
 console.log("---DE BOT IS UITGEZET VOOR 5 MINUTEN---");
bot.destroy()
 setTimeout(function(){ 
      bot.login(process.env.token)
      return message.reply("Ik ben er weer!");
         }, 3000000); //time in milliseconds
}
module.exports.help = {
    name: "zetuit"
}
