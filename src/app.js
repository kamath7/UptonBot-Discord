require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const fortniteMembers = require("./utils/randomGuys");
const memes = require("./utils/giveMeAMeme");

client.on("messageCreate", async function (message) {
  switch (message.content.toLowerCase()) {
    case "fortnite":
      message.channel.send("These are the guys who will play today");
      fortniteMembers().forEach((member) => message.channel.send(member));

      break;
    case "hello":
      message.channel.send("Hello there, " + message.author.toString());
      break;
    case "gay":
      message.channel.send(
        "Agreed @typhy and @awkward_killer7 are the big gay!"
      );
      break;
    case "meme":
      message.channel.send("Getting you a meme");
      const { title, url } = await memes();
      message.channel.send(title);
      message.channel.send(url);

    //implement in future
    //  case "members":
    //     const guild =  client.guilds.cache.get(message.guild.id)
    //     guild.members.fetch().then((data)=> console.log(data.size))

    //     //  message.channel.members.each(member => {
    //     //      console.log(member.user.tag)
    //     //  });
  }
});
client.login(process.env.BOT_TOKEN);
