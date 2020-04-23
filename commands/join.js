const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


       const channel = message.member.voiceChannel; 
       channel.join().then(connection => console.log('Connected!')).catch(console.error);
            



}

module.exports.help = {

    name: "join"

}
