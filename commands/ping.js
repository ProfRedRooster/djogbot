const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  if (talkedRecently.has(message.author.id)) {
            message.reply("Wacht **10 seconden** voordat je weer !ping kan gebruiken!");
    } else {

           // the user can type the command ... your command code goes here :)
              const m = await message.channel.send("Even geduld...");
    m.edit(`Pong! (ik kan pingpongen jeej) Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(bot.ping)}ms`);

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 10000);
    }
    
}

module.exports.help = {

    name: "ping"

}
