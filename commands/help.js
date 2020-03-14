const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


        var text = "**DJOGBot** \n\n **__Commands__** \n !ping - Pong! \n !ban [persoon] - Verban iemand van de server \n !id - Stuurt de server id \n !kick [persoon] - iemand wegsturen";

        message.author.send(text);
        message.channel.send("Ik heb alle commandos naar je prive berichten gestuurd!");


            



}

module.exports.help = {

    name: "help"

}