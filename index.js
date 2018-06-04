const Discord = require('discord.js');
const client = new Discord.Client();


   client.on('message', message => {
if (message.content.startsWith('ldoeroll')){
     let embed = new Discord.RichEmbed()
  .setColor("random")
  .setFooter('Last Day on Earth: Survival', 'https://cdn.discordapp.com/attachments/435973456467591170/446103479442735114/Last_Day_On_Earth_Survival.jpg')
  .addField('INFO ROLL', ':tm:')
  .addField('@ADMIN' , 'هو المسؤول الاول في التحكم في السيرفر و هو يقرر كل شيئ')
  .addField('@MODERATEUR' , 'شرطة السيرفر . يسعى لفرض القواعد . وتسيير السيرفر بشكل منضم')
  .addField('@GUIDE PRO', 'يقومون بالمساعدة و بالاجابة على تسائلات الاعبين حول اللعبة')
  .addField('@PARTNERS', 'شركاء السيرفر')
  .addField('@YOUTUBERS', 'دور خاص بالقنوات')
  .addField('@SURVIVORS', 'أعضاء المجتمع LDOE')


   message.channel.send(embed);
    }
});

   client.on('message', message => {
if (message.content.startsWith('ldoelinks')){
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
			  .setAuthor(message.author.username)
              .setColor('RANDOM')
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

var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();
	var Date15= new Discord.RichEmbed()
client.on('ready', () => {          
  client.user.setGame("Date " + Day + "-" + Month + "-" + Year + "" , 'https://www.twitch.tv/v5bz');
});

client.on('message', message => {   
if (message.author.boss) return;
var prefix = ".";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "Mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين 

 ${message.author.tag} تمت معاقبتك بواسطة

[ ${reason} ] : السبب

اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين 
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
	if (command == "UnMute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});

client.login(process.env.TOKEN)


