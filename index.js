const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.includes('ncode')) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.guild.me.setNickname(message.content.replace('ncode', 'code bunker', ));
        message.channel.send('تم تغيير الكود :white_check_mark: ');
}

});

  client.on('message', message => {
      if (message.content === "bunker code") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
 
              var Date15= new Discord.RichEmbed()
              .setTitle("**  code --- :radio:   :arrow_up:  **")
			  .setAuthor(message.author.username)
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
              .setFooter(`Last Day on Earth `, 'https://i.pinimg.com/564x/bb/1a/98/bb1a980879ff927107273b761d4fbdd0.jpg')
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "code bunker") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
 
              var Date15= new Discord.RichEmbed()
              .setTitle("**  code --- :radio:   :arrow_up:  **")
			  .setAuthor(message.author.username)
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
              .setFooter(`Last Day on Earth `, 'https://i.pinimg.com/564x/bb/1a/98/bb1a980879ff927107273b761d4fbdd0.jpg')
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "رمز البنكر") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
 
              var Date15= new Discord.RichEmbed()
              .setTitle("**  code --- :radio:   :arrow_up:  **")
			  .setAuthor(message.author.username)
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
              .setFooter(`Last Day on Earth `, 'https://i.pinimg.com/564x/bb/1a/98/bb1a980879ff927107273b761d4fbdd0.jpg')
			   message.channel.sendEmbed(Date15);
      }
  });

client.on('message', message => {
      if (message.content === "كود البنكر") {
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
 
              var Date15= new Discord.RichEmbed()
              .setTitle("**  code --- :radio:   :arrow_up:  **")
			  .setAuthor(message.author.username)
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "Date "+ Day + "-" + Month + "-" + Year + "")
              .setFooter(`Last Day on Earth `, 'https://i.pinimg.com/564x/bb/1a/98/bb1a980879ff927107273b761d4fbdd0.jpg')
			   message.channel.sendEmbed(Date15);
      }
  });




const devs = ['413509726735826946' , '' , '' , ''];
const adminprefix = ".";
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
    client.user.setGame(argresult, "https://www.twitch.tv/ldoe");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });


client.login(process.env.TOKEN)


