const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    const guildMember = message.member;
    let role = message.guild.roles.find(r => r.name == args[1]) || message.guild.roles.find(r => r.id == args[1]) || message.mentions.roles.first()    
if(!role) return message.channel.send("Gebruik !join [Groningen of Appingedam].") 

guildMember.addRole(role.id)
}

module.exports.help = {

    name: "join"

}