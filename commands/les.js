const Discord = require("discord.js");
const rm = require('discord.js-reaction-menu');

module.exports.run = async(bot, message, args) => {
    new rm.menu(message.channel, message.author.id, [message.channel.send("test")], message.channel.send("test2")
    new Discord.RichEmbed({title:'test3'}), new Discord.RichEmbed({title:'test4'}), new Discord.RichEmbed({title:'test5'})

}

module.exports.help = {

    name: "les"

}
