const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    const channel = message.member.voiceChannel;
    channel.join()
    .then(connection => message.channel.send('Verbonden'))
    .catch(console.error);


}

module.exports.help = {

    name: "join"

}
