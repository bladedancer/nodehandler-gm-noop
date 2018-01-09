const specs = require('../src');
const action = require('../src/action');
const expect = require('chai').expect;
const { mocknode } = require('axway-flow-sdk');

describe('nodehandler-gm-noop', () => {
	describe('#constructor', () => {
		it('[TEST-1] should define node specs', () => {
			expect(specs).to.exist;
			expect(typeof action).to.equal('function');
			expect(mocknode('gm-noop')).to.exist;
		});
	});

	describe('#todo', () => {
		it('[TEST-2] should fail to with invalid argument', () => {
			// invoke gm-noop#todo and check that the default callback is
			// called: cb('invalid argument')
			return mocknode(specs).node('gm-noop').invoke('todo', { todo: undefined })
				.then((data) => {
					expect(data).to.deep.equal([ 'invalid argument' ]);
				});
		});

		it('[TEST-3] should succeed', () => {
			// invoke gm-noop#todo and check that the 'next' output callback is
			// called: cb.next(null, 'todo')
			return mocknode(specs).node('gm-noop').invoke('todo', { todo: 'stuff' })
				.then((data) => {
					expect(data).to.deep.equal({
						next: [ null, 'todo' ]
					});
				});
		});
	});
});
