const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('details')
		.setDescription('Takes and Replies with details.')
		.addStringOption(option => option.setName('input').setDescription('Enter a string').setRequired(true))
		.addIntegerOption(option => option.setName('int').setDescription('Enter an integer').setRequired(true))
		.addNumberOption(option => option.setName('num').setDescription('Enter a number'))
		.addBooleanOption(option => option.setName('choice').setDescription('Select a boolean'))
		.addUserOption(option => option.setName('target').setDescription('Select a user'))
		.addChannelOption(option => option.setName('destination').setDescription('Select a channel'))
		.addRoleOption(option => option.setName('muted').setDescription('Select a role'))
		.addMentionableOption(option => option.setName('mentionable').setDescription('Mention something')),
	async execute(interaction) {
		const string = interaction.options.getString('input');
		const integer = interaction.options.getInteger('int');
		const number = interaction.options.getNumber('num');
		const boolean = interaction.options.getBoolean('choice');
		const user = interaction.options.getUser('target');
		const member = interaction.options.getMember('target');
		const channel = interaction.options.getChannel('destination');
		const role = interaction.options.getRole('muted');
		const mentionable = interaction.options.getMentionable('mentionable');
		console.log([string, integer, boolean, user, member, channel, role, mentionable]);
		await interaction.reply(`${string}, ${integer}, ${number}, ${boolean}, ${user}, ${member}, ${channel}, ${role}, ${mentionable}`);
	},
};