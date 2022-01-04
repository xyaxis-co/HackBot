const cron = require('node-cron');

module.exports.createJob = () => {
	cron.schedule('* * * * *', () => {
		console.log('This goes every minute');
	});
};