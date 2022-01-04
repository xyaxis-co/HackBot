const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
// const { createJob } = require('../cronjobs/cronJobs');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder().setName('prepare').setDescription('Prepares HackBot for the Hackathon'),
	async execute(interaction, client) {
		await interaction.deferReply();
		const everyoneRole = await interaction.member.guild.roles.everyone;
		// get Hackathon Name from DB
		await interaction.guild.channels.create('#Hackathon Name', {
			type: 0,
			permissionOverwrites: [
				{ type: 'member', id: interaction.user.id, allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES] },
				{ type: 'member', id: client.user.id, allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES] },
				{ type: 'role', id: everyoneRole.id, deny: [Permissions.FLAGS.VIEW_CHANNEL] },
			],
		});
		await interaction.editReply({ content: '' });
		await wait(4000);
		await interaction.deleteReply();
	},
};