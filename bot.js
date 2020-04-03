const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = process.env.PREFIX;
bot.on("ready", () => {
    console.log(`${bot.user.username} IS READY!`);
});
bot.login(process.env.BOT_TOKEN);
