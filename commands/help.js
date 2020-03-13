const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


        var text = "**DJOGBot** \n\n **__Commands__** \n !ping - Pong! \n !PLACEHOLDER - Placeholder";

        message.author.send(text);
        message.channel.send("kijk in je dms!!");


            



}

module.exports.help = {

    name: "help"

}