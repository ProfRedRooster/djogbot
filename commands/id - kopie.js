const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   message.author.send("De server id van de server " + message.guild.name + " is: " + message.guild.id);
    message.channel.send("Ik heb de server id naar je gestuurd!");
}

module.exports.help = {

    name: "id"

}
