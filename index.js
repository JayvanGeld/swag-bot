const Discord = require('discord.js');
const { Client, MessageAttachment } = require('discord.js');
const { createContext } = require('vm');
const fs = require('fs');
const { spawn } = require('child_process');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    // Ignore messages that aren't from a guild
    if (!message.guild) return;

    // Message code  
	const member = message.author;

	if (member) {
		if (message.content == 'pls howswag' || message.content == 'Pls howswag') {
			const user = message.guild.member(member);
			
			if (user.displayName == 'JayvanGeld') {
				message.reply('you are 100% swag :sunglasses:');
			}
			else if (user.displayName == 'stevenkniest') {
				message.reply('you are 0% swag :sunglasses:');
			}
			else {
				var swagamount = Math.floor((Math.random() * 100) + 1);
				getemoji(swagamount, message, 'swag');
			}
		}
			
		if (message.content == 'pls howdownbad' || message.content == 'Pls howdownbad') {
			const user = message.guild.member(member);
				
			if (user.displayName == 'JayvanGeld') {
				message.reply('you are 0% downbad :sunglasses:');
			}
			else if (user.displayName == 'stevenkniest') {
				message.reply('you are 100% downbad :regional_indicator_l:');
			}
			else {
				var swagamount = Math.floor((Math.random() * 100) + 1);
				getemoji(swagamount, message, 'downbad');
			}
		}
		
		const user = message.guild.member(member);
		console.log(user.displayName + ': ' + user.id);
		if (user.id == '623489219758915599') {
			const buffer = fs.readFileSync('./swag.png');
            const attachment = new MessageAttachment(buffer, 'swag.png');
            message.reply(attachment);
		}
	}
})

function getemoji(swagamount, message, type) {
	if (type == 'swag')
	{
		if (swagamount > 70) {
			message.reply('you are ' + swagamount + '% swag :sunglasses:');
		}
		else if (swagamount > 30) {
			message.reply('you are ' + swagamount + '% swag :neutral_face:');
		}
		else if (swagamount < 31) {
			message.reply('you are ' + swagamount + '% swag :regional_indicator_l:');
		}
	}
	else if (type == 'downbad')
	{
		if (swagamount > 70) {
			message.reply('you are ' + swagamount + '% downbad :regional_indicator_l:');
		}
		else if (swagamount > 30) {
			message.reply('you are ' + swagamount + '% downbad :neutral_face:');
		}
		else if (swagamount < 31) {
			message.reply('you are ' + swagamount + '% downbad :sunglasses:');
		}
	}
}

client.login('Nzc1MDgwMjA3Mzg0MTgyNzg0.X6hHsQ.-MobwNKn2ce9t0IbEYRVBZDYZmY');