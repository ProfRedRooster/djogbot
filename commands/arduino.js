const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  return message.channel.send("Hier vind je een lijst van alle lessen van Arduino: https://is.gd/rUnII5")
    
}

module.exports.help = {

    name: "arduino"

}
