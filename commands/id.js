const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

   return message.author.send("De server id is:" + message.guild.id);
    
}

module.exports.help = {

    name: "id"

}
