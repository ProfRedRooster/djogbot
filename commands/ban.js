const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Make sure you have the BAN_MEMBERS permission!");
    var member= message.mentions.members.first();
    if(!member) return message.reply("Please mention a member to ban!")

        // Kick
        member.ban().then((member) => {
            // Successmessage
            message.channel.send("Member" + member.displayName + " has been successfully banned :point_right: https://gifimage.net/wp-content/uploads/2017/07/ban-hammer-gif-5.gif");
        }).catch(() => {
             // Failmessage
            message.channel.send("I cant ban that person!");
        });
      

}

module.exports.help = {

    name: "ban"

}