const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    message.channel.send("Goede vraag! Het antwoord is simpel: doen wat Richel zegt :sunglasses:");
    setTimeout(function(){ 
        message.delete();
        message.channel.send("Okee, nu serieus ... :sunglasses:");
        message.channel.send(" ");
        message.channel.send("We gaan aan de slag met de hoofdstukken in een van de drie vakken die Richel geeft! \n\n Gebruik de volgende commandos \n\n");
        setTimeout(function(){ 
            message.delete();
            message.channel.send("!arduino om met Arduino te beginnen");
            message.channel.send("!mbot om met mBot te beginnen");
            message.channel.send("!processing om met Processing te beginnen");
            return;
         }, 1000); //time in milliseconds
     }, 1000); //time in milliseconds
}

module.exports.help = {
    name: "watmoetikdoen"
}
