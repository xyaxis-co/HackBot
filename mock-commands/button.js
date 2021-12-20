const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('button').setDescription('Contains Button'),
	async execute(interaction) {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
				new MessageButton()
					.setCustomId('secondary')
					.setLabel('Custom')
					.setStyle('DANGER'),
				new MessageButton()
					.setLabel('Secondary')
					.setURL('https://harshal-kaigaonkar.netlify.app/')
					.setStyle('LINK'),
			);
		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Some title')
			.setURL('https://discord.js.org')
			.setDescription('Some description here');
		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	},
};