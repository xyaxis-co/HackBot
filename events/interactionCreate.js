module.exports = {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (interaction.isButton()) {
			if (interaction.customId === 'primary') {
				interaction.reply({ content: 'Primary Button Clicked' });
			}
			else if (interaction.customId === 'secondary') {
				interaction.reply({ content: 'Secondary Button Clicked' });
			}
			return;
		}
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction as /${interaction.commandName}`);
		if (!interaction.isCommand()) return;


		const command = client.commands.get(interaction.commandName);

		if (!command) return;

		try {
			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};