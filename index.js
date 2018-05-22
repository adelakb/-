const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if (message.content.includes('ncode')) {
    if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
    message.guild.me.setNickname(message.content.replace('ncode', 'code bunker', ));
}

});

client.on('message', message => 
{ if (message.content === 'code bunker') {
message.channel.send(':radio:');
}
});

client.on('message', message => 
{ if (message.content === 'bunker code') {
message.channel.send(':radio:');
}
});

client.on('message', message => 
{ if (message.content === 'كود البنكر') {
message.channel.send(':radio:');
}
});

client.on('message', message => 
{ if (message.content === 'رمز البنكر') {
message.channel.send(':radio:');
}
});



client.login(process.env.TOKEN)


