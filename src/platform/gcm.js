'use strict';

const gcm = require('node-gcm');

module.exports = {
  send: function(opts, cb) {
    cb = cb || function() {};

    var message = new gcm.Message({
      data: {
        title: opts.title,
        body: opts.body
      }
    });

    var sender = new gcm.Sender(process.env.GCM_KEY);
    sender.sendNoRetry(message, {
      registrationTokens: opts.userToken
    }, cb);
  }
};
