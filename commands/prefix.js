const discord = require("discord.js");
const fs = require("fs");
module.exports.run = async(bot, message, args) => {

if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Make sure you have the MANAGE_SERVER permission!");

    if(!args[0]) return message.reply("use prefix [prefix]")
    

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    }

    fs.writeFileSync("./prefixes.json", JSON.stringify(prefixes), (err) =>{
        if(err) message.channel.send("Internal Error!");

    })

    return message.reply(`Prefix set! new prefix: ${args[0]}`);
}

module.exports.help = {

    name: "prefix"

}