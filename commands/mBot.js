const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  return message.channel.send("Hier vind je een lijst van alle lessen van mBot: https://is.gd/UtjYvw")
    
}

module.exports.help = {

    name: "mbot"

}
