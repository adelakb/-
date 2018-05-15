const Discord = require('discord.js');
const client = new Discord.Client();

const devs = ['413509726735826946' , '' , '' , ''];
const adminprefix = "ldoe";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
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
    if (!message.member.roles.find("name", "code.bunker")) return message.channel.send('انت لا تملك الصلاحية!');
    message.guild.me.setNickname(message.content.replace('+code', ''));
}
});


client.login(process.env.TOKEN)


