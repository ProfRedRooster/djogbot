const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {


    	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
		const dispatcher = connection.play('rr.mp3');

dispatcher.on('start', () => {
	message.channel.send("Het beste liedje ooit is nu aan het spelen!");
});

dispatcher.on('finish', () => {
	message.channel.send("Afgelopen :(");
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
