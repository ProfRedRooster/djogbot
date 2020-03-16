const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    let user = message.mentions.members.first();
    let GRol = message.guild.roles.find(`name`, `Groningen`)
    user.addRole(GRol).catch(console.error);


guildMember.addRole(role.id)
}

module.exports.help = {

    name: "groningen"

}