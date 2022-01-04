const { Permissions } = require('discord.js');
const { SlashCommandBuilder } = require('@discordjs/builders');
// const { createJob } = require('../cronjobs/cronJobs');
// const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('prepare')
		.setDescription('Prepares HackBot for the Hackathon')
		.addStringOption(option => option.setName('unique-code').setDescription('Enter the Unique Code').setRequired(true)),
	async execute(interaction, client) {
		await interaction.deferReply({ ephemeral: true });
		const id = await interaction.options.getString('unique-code');
		const everyoneRole = await interaction.member.guild.roles.everyone;
		// check if DB contains this Hackathon Registered into DB with id
		// get Hackathon Name from DB
		const hackathonName = 'Hackathon - Manager' + id.toString();
		const newChannel = await interaction.guild.channels.create(`${hackathonName}`, {
			type: 0,
			permissionOverwrites: [
				{ type: 'member', id: interaction.user.id, allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES] },
				{ type: 'member', id: client.user.id, allow: [Permissions.FLAGS.VIEW_CHANNEL, Permissions.FLAGS.SEND_MESSAGES] },
				{ type: 'role', id: everyoneRole.id, deny: [Permissions.FLAGS.VIEW_CHANNEL] },
			],
		});
		await interaction.editReply({ content: `Please goto <#${newChannel.id}> for Further details.` });
	},
};