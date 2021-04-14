// Import discord.js and create the client
const Discord = require('discord.js')
const client = new Discord.Client();

// Register an event so that when the bot is ready, it will log a messsage to the terminal
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('with Moe', { type: 'PLAYING' });
})

// I AM SO SO SO SO SO SO SORRY

const moe = ["https://i.imgur.com/G06IKOL.png", "https://i.imgur.com/OWahzuf.png", "https://i.imgur.com/Ybl0ttp.png", "https://i.imgur.com/FsQVHW1.png", "https://i.imgur.com/T1Ru01p.png"]
const love = ["I love you always, darling.", "I think I love you more and more each day.", "I love you, I love you, I love you, I love you, I love you! *(Each of the heads says I love you!)*", "you make every single day worth living.", "I love you so much more than my bullshit ex Zhongli. Don't even worry about him, baby."]

const exampleEmbed = new Discord.MessageEmbed()
  .setColor('#53FEB6')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS NO SPOILERS')
  .setDescription('Archon quest discussion in <#830963701414363136> **only** until 7 days has passed since release.')
  .setFooter('Love, Osial Overlord of the Vortex');


const libraryE = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE A LORE LIBRARY')
  .setURL('https://khaenriah.com/library')
  .setDescription(`Khaenri'ah hosts a **Lore Library and Database** curating fan theories from all over the internet. \u200B \u200B 

      :star: https://khaenriah.com/library \u200B 
      :pencil: Submit a theory/essay to our Library at <#823831293825384468> \u200B 
      :bookmark: Use this reaction to highlight posts on <#828101027273900044>\u200B \u200B 
      `)
  .setFooter('Love, Osial Overlord of the Vortex');


const sourcesE = new Discord.MessageEmbed()
  .setColor('#e342d3')
  .setTitle('<:osial:830785268461994024> OSIAL SAYS WE HAVE RECOMMENDED SOURCES')
  .setDescription(`Looking for quest logs, item descriptions, or other facts? Aside from bringing up your Archive, we have some recommended resources.over the internet. \u200B \u200B 

      :star: https://genshin-impact.fandom.com/ (Descriptions/logs, not summaries) \u200B 
      Use \`[[Wiki Page Name]]\` (case-sensitive) to bring up Wiki pages.
      :star: https://genshin.honeyhunterworld.com/ (Datamined database items, books, quests) \u200B 
      :star: https://www.gensh.in/ (Database) \u200B \u200B 
      `)
  .setFooter('Love, Osial Overlord of the Vortex');


const socialsE = new Discord.MessageEmbed()
.setColor('#e342d3')
.setTitle('<:osial:830785268461994024> OSIAL SAYS THIS IS KHAENRI\'AH')
.setDescription(`We create content and archive Genshin lore. Follow us across our pages!\u200B \u200B 

    :star: https://khaenriah.com · our website\u200B 
    :books: https://khaenriah.com/library · lore library\u200B 
    :pencil: https://khaenriah.com/contribute · contribute to khaenri\'ah\u200B 
    :bird: https://twitter.com/khaenriahcom · tweet tweet\u200B \u200B 
     \u200B 
    `)
.setFooter('Love, Osial Overlord of the Vortex');


// Register an event to handle incoming messages
client.on('message', async msg => {

  // actual useful commands

  if (msg.content.includes("~library")) {
    msg.channel.send(libraryE);
  }

  if (msg.content.includes("~socials")) {
    msg.channel.send(socialsE);
  }

  if (msg.content.includes("~sources") || msg.content.includes("~ref")) {
    msg.channel.send(sourcesE);
  }

 // so true

  if (msg.content.startsWith("so true")) {
    msg.react('🇸')
      .then(() => msg.react('🇴'))
      .then(() => msg.react('🇹'))
      .then(() => msg.react('🇷'))
      .then(() => msg.react('🇺'))
      .then(() => msg.react('🇪'))
      .catch(() => console.error('One of the emojis failed to react.'));
  }

  // Check if the message starts with '!hello' and respond with 'world!' if it does.
  if (msg.content.startsWith("~gm")) {
    msg.reply("good morning baby. How has your morning been?");
  } else if (msg.content.startsWith("~head")) {
    msg.reply("the more heads to love you with.");
  } else if (msg.content.startsWith("~moe")) {
    const randommoe = moe[Math.floor(Math.random() * moe.length)];
    msg.channel.send("", { files: [randommoe] });
  } else if (msg.content.startsWith("~hug")) {
    msg.reply("*hugs you tenderly with my five watery tendrils*");
  } else if (msg.content.startsWith("~kiss")) {
    msg.reply(" *kiss* *kiss* *kiss* *kiss* *kiss* –– each of the five heads gives you a lil smooch!");
  } else if (msg.content.startsWith("~cook")) {
    msg.reply(" hi baby. I've prepared some scrambled eggs for you. :)");
  } else if (msg.content.startsWith("~i love you")) {
    const randomlove = love[Math.floor(Math.random() * love.length)];
    msg.reply(randomlove);
  } else if (msg.content.startsWith("~aq") || msg.content.includes("~spoilers")) {
    msg.channel.send(exampleEmbed)
  }
})

// client.login logs the bot in and sets it up for use. You'll enter your token here.
client.login();