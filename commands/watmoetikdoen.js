const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
    message.channel.send("Goede vraag! Het antwoord is simpel: doen wat Richel zegt :sunglasses:");
}

module.exports.help = {
    name: "watmoetikdoen"
}
