const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
message = msg;
message.delete();
const amount = args.join(' '); // Amount of messages which should be deleted

if (!amount) return msg.reply('Hoeveel berichten moet ik verwijderen?'); // Checks if the `amount` parameter is given
if (isNaN(amount)) return msg.reply('Ben ik nou dom of is dat geen nummer'); // Checks if the `amount` parameter is a number. If not, the command throws an error

if (amount > 100) return msg.reply('Oh, te veel werk, heb ik geen zin in, ik ga alleen akkoord met 100 berichten max (ligt aan discord api)'); // Checks if the `amount` integer is bigger than 100
if (amount < 1) return msg.reply('Uhh, dat is onmogelijk'); // Checks if the `amount` integer is smaller than 1

await msg.channel.messages.fetch({ limit: amount }).then(messages => { // Fetches the messages
    msg.channel.bulkDelete(messages // Bulk deletes all messages that have been fetched and are not older than 14 days (due to the Discord API)
)});
}

module.exports.help = {

    name: "clear"

}
