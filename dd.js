const { Client } = require('discord.js');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
   console.log(message.content); 

   if (message.content === '!ping') {
      message.channel.send('pong');
   } 

   if (message.content === '!나 레식 잘함?') {
    message.channel.send('응니 개못함');
 } 

 if (message.content === '!여친 생기게 해줘') {
    message.channel.send('니 영원히 여친 없음');
 } 

 if (message.content === '!봇개발자') {
    message.channel.send('시오니 왔쪄염 뿌우');
 } 

});


client.login('process.env.TOKEN');