const discord = require("discord.js");
const botConfig = require("./botConfig.json");
const fs = require("fs");
const bot = new discord.Client();
bot.commands = new discord.Collection();
const profanity = require('./swearwords.json');

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
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welkom');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welkom op de DJO server ${member}!`);
});
bot.on('guildMemberRemove', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'welkom');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Tot ziens ${member}, :(`);
});

bot.on("ready", async () => {

    console.log(`Bot started!`)
    bot.user.setActivity("||Bezig Met Updaten||");
    

const activities_list = [
    "met code", 
    "met c++",
    "met discord", 
    "!help",
    "DJOG",
    "Gemaakt door Daan en Richel",
    "I love richel",
    "Zeg altijd haudoe als je weggaat",
    "Leest iemand dit echt?",
    "Pizza is lekker!",
    "Mijn aanrader voor eten? een dubbele Accuburger met extra stroom!",
    "Leuk feitje, deze tekst veranderd elke halve minuut!"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 30000); // Runs this every 5 seconds.



});

bot.on("message", async message => {
 
 if(botConfig.FILTER_LIST.some(word => message.content.toLowerCase().includes(word))){
    message.delete()
    message.reply("Niet Schelden!");
  }
     if (message.content.includes('discord.gg/'||'discordapp.com/invite/')) { //if it contains an invite link
             if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Link plaatsen toegestaan: je hebt de permissie!");
    message.delete() //delete the message
      .then(message.reply('Discord invites zijn niet toegestaan!'))
  }
      if (message.content.includes('http://')) { //if it contains an invite link
             if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Link plaatsen toegestaan: je hebt de permissie!");
    message.delete() //delete the message
      .then(message.reply('Links zijn niet toegestaan!'))
  }
    if (message.content.includes('https://')) { //if it contains an invite link
             if(message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Link plaatsen toegestaan: je hebt de permissie!");
    message.delete() //delete the message
      .then(message.reply('Links zijn niet toegestaan!'))
  }
    
    
 


   

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
