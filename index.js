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

const devs = ['413509726735826946' , '290260570374930432' , '406100430578253826' , ''];
const adminprefix = "+";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;
      
   else 
  if (message.content.startsWith(adminprefix + 'code')) {
  client.user.setActivity(argresult , {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } 
});
  

	
})


   client.on('message', message => {
if (message.content.startsWith('ldoeinfo')){
     let embed = new Discord.RichEmbed()
  .setColor("random")
  .setFooter('Last Day on Earth: Survival', 'https://cdn.discordapp.com/attachments/435973456467591170/446103479442735114/Last_Day_On_Earth_Survival.jpg')
  .addField('OFFICIAL LINKS', ':tm:')
  .addField('Google Play (for Android users):' , 'https://goo.gl/24XTLu')
  .addField('Apps Store (for iOS users) :' , 'https://appsto.re/ru/-eMbkb.i')
  .addField('SUPPORT', 'https://kefirgames.helpshift.com/a/last-day-on-earth/')
  .addField('FACEBOOK', 'https://www.facebook.com/lastdayonearthgame')
  .addField('INSTAGRAM', 'https://www.instagram.com/lastdayonearthgame')
  .addField('TELEGRAM', 'https://t.me/lastdayonearthsurvival')
  .addField('TWITTER', 'https://twitter.com/lastdaysurvival')
  .addField('REDDIT', 'https://www.reddit.com/r/LastDayonEarthGame')
  .addField('DISCORD', 'https://discord.gg/c7Snete')


   message.channel.send(embed);
    }
});




client.login(process.env.TOKEN)


