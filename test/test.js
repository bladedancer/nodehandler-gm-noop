const specs = require('../src');
const expect = require('chai').expect;
const { mocknode } = require('axway-flow-sdk');

describe('nodehandler-gm-noop', () => {
	describe('#constructor', () => {
		it('[TEST-1] should define node specs', () => {
			expect(specs).to.exist;
			expect(mocknode('gm-noop')).to.exist;
		});
	});

	describe('#Test noop', () => {
		it('[TEST-2] should succeed', () => {
			// invoke gm-noop#noop and check that the 'next' output callback is
			// called: cb.next()
			return mocknode(specs).node('gm-noop').invoke('noop', {})
				.then((data) => {
					expect(data).to.deep.equal({
						next: [ ]
					});
				});
		});
	});
});
