const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! (ik kan pingpongen jeej) Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);
    
}

module.exports.help = {

    name: "ping"

}
