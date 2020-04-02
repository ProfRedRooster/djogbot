const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  // Note that this will only work if the message was sent in a guild
    // and the author is actually in a voice channel.
    // You might want to check for all that stuff first
    const channel = message.member.voiceChannel;

    channel.join()
    .then(connection => message.channel.send('Oki doki'))
}

module.exports.help = {

    name: "joinchannel"

}
