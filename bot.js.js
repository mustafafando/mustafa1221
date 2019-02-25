const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQ5MDA3Nzk0OTA1NTQ2NzYx.D1Nm4Q.cQl2Dph3B3ZCFN3xCxTsD0AYVgM');