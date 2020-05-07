const discord = require("discord.js");
const randomPuppy = require("random-puppy");
const talkedRecently = new Set();
module.exports.run = async(bot, message, args) => {
     if (talkedRecently.has(message.author.id)) {
            message.channel.send("**Het meme commando heeft een cooldown!** \n\n Wacht **20 seconden** voordat je weer een meme kan krijgen!");
    } else {

           // the user can type the command ... your command code goes here :)
            const subReddits = ["meme", "memes"];
    // Grab a random property from the array
 const random = subReddits[Math.floor(Math.random() * subReddits.length)];
// 
   // Get a random image from the subreddit page
 const img = await randomPuppy(random);
  const embed = {
 "title": "Hier is je huisgedownloade meme",
 "color": 16209920,
 "image": {
    "url": img
  }
};
message.channel.send({ embed });

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, 20000);
    }
}
module.exports.help = {

  name: "meme"

 }
