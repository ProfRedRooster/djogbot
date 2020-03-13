const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("De hebt niet de benodigde rechten");
    var member= message.mentions.members.first();
    if(!member) return message.reply("Wie wil je nou kicken dan?")

        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(member.displayName + " is succesvol weggestuurd :point_right: Goed gedaan Richel!");
        }).catch(() => {
             // Failmessage
            message.channel.send("I cant kick that person!");
        });
      

}

module.exports.help = {

    name: "kick"

}