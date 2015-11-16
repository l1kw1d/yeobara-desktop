'use strict';

const ipc = require('ipc');

ipc.on('meetup', () => {
	page('/meetup');
});

ipc.on('env', (env) => {
	window.env = env;
});
