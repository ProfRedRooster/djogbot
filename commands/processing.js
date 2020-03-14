const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  return message.channel.send("Hier vind je een lijst van alle lessen van Processing: https://is.gd/wgYAx1")
    
}

module.exports.help = {

    name: "processing"

}
