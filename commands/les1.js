const Discord = require("discord.js");
const rm = require('discord.js-reaction-menu');

module.exports.run = async(bot, message, args) => {
  
    message.channel.send("Welkom bij de les: Hoe werkt de Discord?");
    setTimeout(function(){ 
        message.channel.send("Laten we beginnen!");
        setTimeout(function(){ 
            message.channel.send("Als eerste, ben je van groningen of appingedam? doe ?rank [Groningen of Appingedam] ik geef je een halve minuut voordat we verdergaan");
            setTimeout(function(){ 
                //Code
                message.channel.send("Oke! de tijd is om, een ogenblikje alstjeblieft");
                if(message.member.roles.find(r => r.name === "Groningen") || message.member.roles.find(r => rname === "Appingedam")){
                
                    return message.channel.send("Goed zo! Je hebt jezelf een rol gegeven! dat was het einde van de eerste les! volgende les? doe dan !les2");

                }
                return message.channel.send("Ik kon geen rol detecteren! probeer de les opnieuw met !les1");
             }, 30000); //time in milliseconds
         }, 5000); //time in milliseconds
     }, 5000); //time in milliseconds

}

module.exports.help = {

    name: "les1"

}
