'use strict';

const ipc = require('ipc');

ipc.on('meetup', () => {
	page('/meetup');
});
