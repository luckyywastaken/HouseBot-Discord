var count = 0;
var stat = 0;
const token = process.env.BOT_TOKEN;
const Discord = require('discord.js');
var client = new Discord.Client();
var ready = false;
function n(){};
function run(){try{
const request = require('request')
function repeat(func, times) {
    func();
    --times && repeat(func, times);
}
function output(error, token) {
        if (error) {
                console.log(`There was an error logging in: ${error}`);
                return;
        } else console.log(`Logged in. Token: ${token}`);
}
client.on('ready', () => {
setInterval(function(){
  //console.log('I am ready!');
  client.user.setPresence({ game: { name: 'with housestan17', type: 1 } });
},30000);
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	var nick = newMember.nickname;
	if (nick.startsWith("!") || nick.startsWith("#") || nick.startsWith("^") || nick.startsWith("&") || nick.startsWith("*") || nick.startsWith("$") || nick.startsWith("%") || nick.startsWith("@")){
		newMember.setNickname("HOISTER");
		console.log("Oh noes, "+nick+" was hoisting!!");
		var embed = {embed:{
			title: "WARNING",
			color: 16711680,
			description: "Do not try to hoist your username on this server",
			footer: {
				text: `Warned ${nick} for attempted hoisting`,
				icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
			}
		}};
		newMember.send(embed).catch(function(err){newMember.send(embed)});
	}
	nick = newMember.user.username;
	if (nick.startsWith("!") || nick.startsWith("#") || nick.startsWith("^") || nick.startsWith("&") || nick.startsWith("*") || nick.startsWith("$") || nick.startsWith("%") || nick.startsWith("@")){
		newMember.setNickname("HOISTER");
		console.log("Oh noes, "+nick+" was hoisting!!");
		var embed = {embed:{
			title: "WARNING",
			color: 16711680,
			description: "Do not try to hoist your username on this server",
			footer: {
				text: `Warned ${nick} for attempted hoisting`,
				icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
			}
		}};
		newMember.send(embed).catch(function(err){newMember.send(embed)});
	}
})
client.on('message', (message) => {
	if (message.channel == null || message.member == null && !message.author.bot){
		message.reply("I'm just a bot and can't respond to DMs");
		return;
	}
	if (message.channel.id == 409847049572581396 || message.channel.id == 413135457367359498 || message.channel.id == 402320341420212224 || message.channel.id == 397178804205912074) return;
	if (!message.channel.nsfw && message.content.includes("https://") || message.content.includes("http://") || message.content.includes("www") || message.content.includes(".com") || message.content.includes(".net") || message.content.includes(".org") || message.content.includes(". com") || message.content.includes(". net") || message.content.includes(". org") ){
		if (message.author.id != 299708692129906692 && message.author.id != 346507536389898250){
			message.delete();
			var embed = {embed:{
				title: "WARNING",
				color: 16711680,
				description: "Please do not post links without permission.",
				footer: {
					text: `Warned ${message.author.username} for posting links`,
					icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
				}
			}};
			message.author.send(embed).catch(function(err){message.channel.send(embed)});
		};
	};
	if (!message.channel.nsfw && !message.author.bot){
		try {
			var msg = message.content
				.replace(/@\S+/, "");
			request(`http://www.purgomalum.com/service/json?text=${msg}&fill_text=_filtered_-`, function (error, response, body){
				if (error){
					message.channel.send('I can\'t filter this message\n```' + error + '```');
				} else
				if (JSON.parse(body).result.includes("_filtered_-")){
					message.delete();
					var embed = {embed:{
						title: "WARNING",
						color: 16711680,
						description: "Your content has been determined as rule-breaking, and has therefore been deleted.",
						footer: {
							text: `Warned ${message.author.username} for swearing`,
							icon_url: `https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png`
						}
					}};
					message.author.send(embed).catch(function(err){message.channel.send(embed)});
				};
			});
		} catch(error) {
			message.channel.send('I can\'t filter this message\n```' + error + '```');
		};
	};
});
stat++;
count++;
client.login(token);
console.log(`refreshed house bot (${count})`);
}catch(err){};};
run();
//setInterval(run,60000);
//setInterval(function(){
//	stat++;
//},60000);
