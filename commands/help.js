const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


        var text = "**DJOGBot** \n\n **__Commands__** \n !ping - Pong! \n !ban [persoon] - Verban iemand van de server \n !id - Stuurt de server id \n !kick [persoon] - iemand wegsturen \n !arduino - Geeft meer informatie over arduino \n !damster_dojo - Geeft meer informatie over damster dojo \n !dojo - Geeft meer informatie over de dojo \n !gitlab - Opent de GitLab login pagina \n !mbot - Krijg meer informatie over mBot \n !meme - HET BELANGRIJKSTE COMMANDO \n !processing - Geeft meer info over processing \n !watmoetikdoen - Wat moet ik doen?"

        message.author.send(text);
        message.channel.send("Ik heb alle commandos naar je prive berichten gestuurd!");


            



}

module.exports.help = {

    name: "help"

}
