const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('Replies with every seconds.'),
	async execute(interaction) {
		// It gives a HackBot is thinking message till 4 sec is completed
		// await interaction.deferReply();
		// ephemeral is true when onky the sender sees the message
		await interaction.reply({ content: 'Hello wait for 3 sec :salt: \n [see this link](http://xyaxis.co)', ephemeral: true });
		await wait(3000);
		await interaction.editReply('Pong! It\'s now 3 sec');
		// sends another message immediately
		await interaction.followUp('Ping Again!!');
	},
};