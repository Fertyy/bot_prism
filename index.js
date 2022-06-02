require('dotenv').config();
const Discord = require('discord.js');

const Client = new Discord.Client({
  intents: [
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_MESSAGES,
      Discord.Intents.FLAGS.GUILD_MEMBERS
  ]
});



const prefix = "!";

const a = 0;

Client.on("ready", () => {
  console.log("bot opérationnel");
});

Client.on("guildMemberAdd", member => {
  console.log("un nouveau membre est arrivé");
  member.guild.channels.cache.find(channel => channel.id === "980926346148610069").send("Souhaitez la bienvenue à notre nouveau membre <@" + member.id + "> ! Que la force soit avec toi :ringed_planet:");
});


Client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "boutique"){
      const embed = new Discord.MessageEmbed()
          .setColor("#0029ff")
          .setTitle(":moneybag: Boutique")
          .addField("Vous avez demander la boutique ?", "Il vous suffit simplement de cliquer sur ce lien :\n\n:link: https://teamfrench.eu/boutique/index.php\n\nPuis vous pourrez faire votre choix :ringed_planet:")
          .setThumbnail("https://cdn3.iconfinder.com/data/icons/crowdfunding-4/64/x-20-512.png");
      message.channel.send({ embeds: [embed]});
  }
});

Client.on("messageCreate", message => {
  if (message.author.bot) return;

  if (message.content === prefix + "candidature"){
      const embed = new Discord.MessageEmbed()
          .setColor("#0029ff")
          .setTitle("Comment candidater :question:")
          .addField("L'équipe administrative ou animatrice vous intéresse ?", "Pour tenter votre chance, il suffit de suivre ces instructions :\n\n• Créer sa candidature sur un [Google Doc](https://www.google.com/intl/fr-CA/docs/about/).\n• Faire apparaître votre âge.\n• Faire apparaître vos motivations.\n• Faire apparaître votre expérience.\n• Tout ce que vous pensez qu'il est utile de savoir.\n\nUne fois terminé, posté votre lien dans <#981981858206208021> et attendez une réponse du staff !")
          .setThumbnail("https://cdn.iconscout.com/icon/free/png-256/office-staff-9-1184344.png");
      message.channel.send({ embeds: [embed]});
  }
});

Client.login(process.env.token);