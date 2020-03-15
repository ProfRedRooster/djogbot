const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

 message.delete();
    message.channel.send("Goede vraag! Het antwoord is simpel: doen wat Richel zegt :sunglasses:");
    setTimeout(function(){ 
        message.delete();
        message.channel.send("Okee, nu serieus ... :sunglasses:\n \nWe gaan aan de slag met de hoofdstukken in een van de drie vakken die Richel geeft!");
        setTimeout(function(){ 
            message.delete();
            message.channel.send("Gebruik een van de volgende commando's: \n \n !arduino om met Arduino te beginnen \n !mbot om met mBot te beginnen \n !processing om met Processing te beginnen");
            return;
         }, 1000); //time in milliseconds
     }, 1000); //time in milliseconds
}

module.exports.help = {
    name: "watmoetikdoen"
}
