const { Command } = require('@sapphire/framework');
const { send } = require('@sapphire/plugin-editable-commands');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
            category: 'general',
			description: 'ping pong'
		});
	}

	async messageRun(message) {
		const msg = await send(message, 'Ping?');

		const content = `:clock: Pong! Bot Latency ${Math.round(this.container.client.ws.ping)}ms. API Latency ${
			msg.createdTimestamp - message.createdTimestamp
		}ms.`;

		return send(message, content);
	}
}

module.exports = {
	UserCommand
};
