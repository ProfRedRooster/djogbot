const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play('https://cdn-34.anonfile.com/laN5O6wfo9/41018414-1588869557/rr.wav');

// Always remember to handle errors appropriately!
connection.on('error', console.error);
		
	}else{
        message.channel.send("Je bent niet verbonden met een spraakkanaal!");
	}


}

module.exports.help = {

    name: "join"

}
