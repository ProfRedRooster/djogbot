const discord = require("discord.js");
const botConfig = require("./botConfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if(jsFiles.length <= 0) {

        console.log("/commands/ directory is empty!");
        rerurn;
    }

    jsFiles.forEach((f,i) => {
        var fileGet = require(`./commands/${f}`);
        console.log(`Loaded File ${f}!`);

       try{
        bot.commands.set(fileGet.help.name, fileGet);

       }catch{

        console.log(`------------WARNING!-------------------`)
        console.log(`Found empty file ${f}, loaded it anyway`)
        console.log(`---------------------------------------`)

       }

    })

});


bot.on("ready", async () => {

    console.log(`Bot started!`)

    bot.user.setActivity("DJOG");

})

bot.on("message", async message => {
    if (message.isMemberMentioned(client.user)) { //we check, whether the bot is mentioned, client.user returns the user that the client is logged in as
        message.channel.send("Hoi! mijn prefix hier is !");
        message.channel.send("typ !help voor een lijst met commandos");
        return;
     }
    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    //var prefix = botConfig.prefix; old method

    var prefixes = JSON.parse(fs.readFileSync("./prefixes.json"));

    if(!prefixes[message.guild.id]){
        prefixes[message.guild.id] = {
        prefixes: botConfig.prefix
        }
    }


    var prefix = prefixes[message.guild.id].prefixes;
    var messsageArray = message.content.split(" ");

    var command = messsageArray[0];

    var arguments = messsageArray.slice(1);


    var commands = bot.commands.get(command.slice(prefix.length));
    if(commands) commands.run(bot,message,arguments);


});


bot.login(process.env.token);
