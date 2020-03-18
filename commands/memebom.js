const discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async(bot, message, args) => {
message.channel.send("Een ogenblikje, ik vraag alle memes op");
    const subReddits = ["meme", "memes"];
    // Grab a random property from the array
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];

    // Get a random image from the subreddit page
    const img = await randomPuppy(random);
    const img2 = await randomPuppy(random);
    const img3 = await randomPuppy(random);
    const img4 = await randomPuppy(random);
    const img5 = await randomPuppy(random);
    const img6 = await randomPuppy(random);
    const img7 = await randomPuppy(random);
    const img8 = await randomPuppy(random);
    const img9 = await randomPuppy(random);
    const img10 = await randomPuppy(random);
    const img11 = await randomPuppy(random);
    const img12 = await randomPuppy(random);
    

    function myFunc(arg) {
        message.channel.send(img);
        message.channel.send(img3);
message.channel.send(img4);
message.channel.send(img5);
message.channel.send(img6);
message.channel.send(img7);
message.channel.send(img8);
message.channel.send(img9);
message.channel.send(img10);
message.channel.send(img11);
message.channel.send(img12);

}

setTimeout(myFunc, 5000, 'funky');


}

module.exports.help = {

    name: "memebomb"

}
