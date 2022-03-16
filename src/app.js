require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on("messageCreate", function (message) {
  switch (message.content.toLowerCase()) {
    case "fortnite":
      message.channel.send("These players will be playing fortnite today");
      break;
    case "hello":
        message.channel.send("Hello there! ")
  }
});
client.login(process.env.BOT_TOKEN);
