const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}else{
        message.channel.send("Je bent niet verbonden met een spraakkanaal!");


}

module.exports.help = {

    name: "join"

}
