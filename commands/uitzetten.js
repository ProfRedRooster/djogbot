const discord = require("discord.js");
module.exports.run = async(bot, message, args) => {

 message.channel.send("**Uitgezet voor 5 minuten**");
 bot.destroy();
  setTimeout(function(){ 
         bot.login(process.env.token);
         return message.channel.send("Ben er weer!");
         }, 300000); //time in milliseconds
}
module.exports.help = {
    name: "zetuit"
}
