const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  return message.channel.send("Ga naar de volgende link om in te loggen op de GitLab: http://51.15.53.32/users/sign_in")
    
}

module.exports.help = {

    name: "gitlab"

}
