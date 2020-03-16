const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

const embed = {
  "title": "Haudoe!",
  "color": 16209920,
  "image": {
    "url": "https://github.com/daantje1/djogbot/blob/master/ah.png?raw=true"
  }
};
message.channel.send({ embed });
}

module.exports.help = {

    name: "haudoe"

}
