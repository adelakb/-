const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  client.user.setActivity(`Last Day on Earth`);
  client.user.setStatus("enligne")
});


client.on('message', msg => {
    if (msg.content === 'كود البنكر') {
        msg.channel.send(':point_up: ');
    }
});

client.on('message', msg => {
    if (msg.content === 'رمز البنكر') {
        msg.channel.send(':point_up: ');
    }
});

client.on('message', msg => {
    if (msg.content === 'bunker code') {
        msg.channel.send(':point_up: ');
    }
});

client.on('message', msg => {
    if (msg.content === 'code bunker') {
        msg.channel.send(':point_up: ');
    }
});

client.on('message',message=> {
if (message.content.includes('+code')) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('انت لا تملك الصلاحية!');
    message.guild.me.setNickname(message.content.replace('+code', ''));
}
});


client.login("NDQyMTQyNjk5NDQxODgxMDg4.Dc6kvA.sYU5aqO3BmW3ET8m3xLwUwKWRV8")


