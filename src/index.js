const sdk = require('axway-flow-sdk');

const flownodes = sdk.init(module);

flownodes.add('gm-noop', {
	name: 'No-Op',
	icon: 'icon.svg',
	description: 'A no-op node.'
})
	.method('noop', {
		name: 'noop',
		description: 'No-op.'
	})
	.output('next', {
		name: 'Next',
		description: 'Next node.',
		schema: {
			type: null
		}
	})
	.action((req, cb) => { cb.next(); });

exports = module.exports = flownodes;
