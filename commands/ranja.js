const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    const embed = new discord.RichEmbed()
	.setImage("https://thumbs.dreamstime.com/b/glas-rote-limonade-39906916.jpg");
	message.channel.send(embed);
}

module.exports.help = {

    name: "ranja"

}
