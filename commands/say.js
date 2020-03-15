const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  message.delete(); 
 
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Error\n``Je hebt MANAGE_MESSAGES nodig om dit commando te gebruiken.``"); //Deze lijn zorgt ervoor dat als de persoon niet de perm "MANAGE_MESSAGES" heeft dat hij dan niet gaat crashen en een bericht terug stuurt
  if (!args[0]) return message.channel.send("`Wat moet ik zeggen?`"); //Als jij geen argumenenten meegeeft stuurt hij een berichtje terug
  let botmessage = args.join(" "); //Dit zorgt ervoor dat hij jou args (Argumenten) opvangt en kan versturen
  message.channel.send(botmessage);  //Verstuur het bericht, en welk bericht? Nou dat zie je hierboven onze argumenten dus
}

module.exports.help = {
  name: "say"
}