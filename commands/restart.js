const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  message.channel.send("Misbruik van dit commando is strafbaar!")
  // Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    message.channel.send('Restarting...')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.token))
    .then (() => message.channel.send("Klaar!"))
    
}
    
}

module.exports.help = {

    name: "restart"

}
