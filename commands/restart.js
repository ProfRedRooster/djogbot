const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  // Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    message.channel.send('Opnieuw Opstarten...')
    .then(msg => client.destroy())
    .then(() => client.login(process.env.token))
    .then (() => message.channel.send("Klaar!"))
    
}
   return resetBot(message.channel);

    
}

module.exports.help = {

    name: "restart"

}
