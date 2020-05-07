const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play('https://cdn-34.anonfile.com/laN5O6wfo9/41018414-1588869557/rr.wav');

connection.on('start', () => {
	message.channel.send("Het beste liedje ooit is nu aan het spelen!");
});

connection.on('finish', () => {
	message.channel.send("Afgelopen :(");
	// Option 1
connection.disconnect();

// Option 2
voiceChannel.leave();
});

// Always remember to handle errors appropriately!
connection.on('error', console.error);
		
	}else{
        message.channel.send("Je bent niet verbonden met een spraakkanaal!");
	}


}

module.exports.help = {

    name: "join"

}
