const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		connection.play('http://dw.convertfiles.com/files/0313435001587664234/rr.aac');

dispatcher.on('start', () => {
	message.channel.send("Het beste liedje ooit is nu aan het spelen!");
});

dispatcher.on('finish', () => {
	message.channel.send("Afgelopen :(");
	// Option 1
connection.disconnect();

// Option 2
voiceChannel.leave();
});

// Always remember to handle errors appropriately!
dispatcher.on('error', console.error);
		
	}else{
        message.channel.send("Je bent niet verbonden met een spraakkanaal!");
	}


}

module.exports.help = {

    name: "join"

}
