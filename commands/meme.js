const discord = require("discord.js");
const randomPuppy = require("random-puppy");
module.exports.run = async(bot, message, args) => {
  return message.channel.send("Memes zijn uitgeschakeld tijdens de les!");
//     const subReddits = ["meme", "memes"];
//     // Grab a random property from the array
//     const random = subReddits[Math.floor(Math.random() * subReddits.length)];
// 
//     // Get a random image from the subreddit page
//     const img = await randomPuppy(random);
//  const embed = {
//  "title": "Hier is je huisgedownloade meme",
//  "color": 16209920,
//  "image": {
//    "url": img
//  }
//};
//message.channel.send({ embed });
}
module.exports.help = {

  name: "meme"

 }
