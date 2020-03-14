# DJOGBOT
This is a bot that i created for [DJOG](https://github.com/djog/dojo)


# How to start the bot?
Step 1: clone the repository
Step 2: make sure you have node.js installed
Step 3: go into the index.js file, where you will find this line of code:

    bot.login(process.env.token);
change it to the following:

    bot.login("YOUR_TOKEN");



(you can get the token from [the Discord developers portal](https://discordapp.com/developers))

Step 4: save your file
Step 5: run `node index.js` in your terminal and the bot should boot up!

