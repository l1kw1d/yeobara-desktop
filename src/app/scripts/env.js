(function(document) {
  'use strict';

  var ipc = require('ipc');

  ipc.on('env', function (env) {
    window.env = env;
  });

  ipc.send('env');
})();
