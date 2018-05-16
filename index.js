const Discord = require('discord.js');
const client = new Discord.Client();

         client.on('message', message => {
			    var prefix = ".";
				const devs = ['413509726735826946' , '' , '' , ''];

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'msg') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if (!devs.includes(message.author.id)) return;
            var bc = new Discord.RichEmbed()
            .addField(' hello survivors ', args)
			.setFooter('Last Day on Earth: Survival', 'https://cdn.discordapp.com/attachments/435973456467591170/446103479442735114/Last_Day_On_Earth_Survival.jpg')
            .setColor('#ff0000')
            m.send({embed: bc});
        });
    }
    } else {
        return;
    }
});

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


