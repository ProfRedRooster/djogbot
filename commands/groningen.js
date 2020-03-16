const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

var role = message.guild.roles.find(role => role.name === "Groningen");
message.member.addRole(role);
return message.channel.send("Welkom in het Groningen team!");

}

module.exports.help = {

    name: "groningen"

}