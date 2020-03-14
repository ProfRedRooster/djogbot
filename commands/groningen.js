const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    let role = message.guild.roles.find(r => r.name === "Groningen");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();
    
    // or the person who made the command: let member = message.member;
    
    // Add the role!
    member.addRole(role).catch(console.error);
    message.channel.send("Welkom bij het Groningen Team " + message.member.name + "!");


            



}

module.exports.help = {

    name: "help"

}