const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  
    message.channel.send("Welkom bij de les: Hoe geef ik aan wie ik ben?");
    setTimeout(function(){ 
        message.delete();
        message.channel.send("Laten we beginnen!");
        setTimeout(function(){ 
            message.delete();
            message.channel.send("Als eerste, ben je van groningen of appingedam? doe ?rank [Groningen of Appingedam] ik geef je een halve minuut voordat we verdergaan");
            setTimeout(function(){ 
                //Code
                message.delete();
                message.channel.send("\n \n Oke! de tijd is om!");
                
                message.channel.send("\n \nje hebt de les gehaald! doe hem opnieuw met !les1");
                message.channel.send(" \n \nHier is je certificaat: https://github.com/daantje1/djogbot/raw/master/certificaat.png");
             }, 30000); //time in milliseconds
         }, 5000); //time in milliseconds
     }, 5000); //time in milliseconds

}

module.exports.help = {

    name: "les1"

}
