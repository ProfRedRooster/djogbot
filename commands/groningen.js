const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const guildMember = message.member;

guildMember.addRole('688081051259502787');  
return message.channel.send("Welkom in het Groningen team!");

}

module.exports.help = {

    name: "groningen"

}