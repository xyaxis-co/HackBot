const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder().setName('create-thread').setDescription('Creates A Thread'),
	async execute(interaction) {
		await interaction.deferReply({ ephemeral: true });
		const channels = await interaction.guild.channels.fetch();
		const channelCategory = await channels.find(channel => channel.name === 'logging channels');
		let id;
		if (!channelCategory) {
			const channel = await interaction.guild.channels.create('logging channels', {
				type: 4,
			});
			id = channel.id;
		}
		else {
			id = channelCategory.id;
		}
		await interaction.guild.channels.create('Team 1 Log', {
			parent: id,
		});
		await interaction.editReply({ content: 'Channels Created!' });
	},
};