require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

const fortniteMembers = require("./utils/randomGuys");
const memes = require("./utils/giveMeAMeme");
const birthdayChecker = require('./utils/birthdayWishes');


client.on("messageCreate", async function (message) {

  if(message.author.id === "948086741250752563"){
    // message.react("🖕");
    message.channel.send("The biggest fool in the channel is now speaking 😂😂😂")
  }
else{
  switch (message.content.toLowerCase()) {
    case "fortnite":
      message.channel.send("These are the guys who will play today");
      fortniteMembers().forEach((member) => message.channel.send(member));

      break;
    case "hello":
      message.channel.send("Hello there, " + message.author.toString()+" "+message.author.id);
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
    //     guild.members.fetch().then((data)=> console.log(data))
    //     // let offlineMembers = guild.members.filter(member=> member.presence.status === "offline")
    //     // let onlineMembers = guild.members.filter(member=> member.presence.status === "online")
    //     // console.log(offlineMembers, onlineMembers)
    //     //  message.channel.members.each(member => {
    //     //      console.log(member.user.tag)
    //     //  });
  }
}

});
client.login(process.env.BOT_TOKEN);
