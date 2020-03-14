const discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async(bot, message, args) => {
    const subReddits = ["meme", "memes"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const img = await randomPuppy(random);


    message.channel.send(img);
}

module.exports.help = {

    name: "meme"

}
