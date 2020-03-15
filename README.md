# DJOGBOT

This is a bot that I created for [DJOG](https://github.com/djog/dojo).

# How to start the bot?

## Step 1: clone the repository

```
git clone https://github.com/daantje1/djogbot.git
```

## Step 2: install prerequisites

### Step 2.1: NodeJS

Make sure you have node.js installed. In a terminal, type:

```
node --version
```

Output should be similar to:

```
v10.15.2
```

Else, install NodeJS. On Linux, for example do:

```
sudo apt install node
```

### Step 2.2: NPM

In a terminal, type:

```
npm --version
```

Ourput should be similar to:

```
5.8.0
```

If not, install the NodeJS Package manager. On Linux this is:

```
sudo apt install npm
```


### Step 2.3: Discord NodeJS package

In a terminal, do:

```
npm i discord.js
```

## Step 3: setup your OATH token

Go into the index.js file, where you will find this line of code:

```
bot.login(process.env.token);
```

Change it to the following:

```
bot.login("YOUR_TOKEN");
```

You can get the token from [the Discord developers portal](https://discordapp.com/developers).

## Step 4: run

In a terminal, do:

```
node index.js
```` 

The bot should appear on the Discord server now :+1:

