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


client.on('ready', () => {
	          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
	var Date15= new Discord.RichEmbed()
              .setTitle("**  code --- :radio:   :arrow_up:  **")
  client.user.setGame("Date "+ Day + "-" + Month + "-" + Year + "" `التاريخ`,'https://www.twitch.tv/v5bz');
});

client.login(process.env.TOKEN)


