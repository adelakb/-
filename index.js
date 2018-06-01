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

client.login(process.env.TOKEN)


