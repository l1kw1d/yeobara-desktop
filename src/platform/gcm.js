'use strict';

const gcm = require('node-gcm');

module.exports = {
  sendNotification: function(opts, cb) {
    cb = cb || function() {};

    var message = new gcm.Message({
      data: {
        title: opts.title,
        body: opts.body
      }
    });

    gcm.Sender(process.env.GCM_KEY).sender.send(message, {
      registrationTokens: opts.userToken
    }, cb);
  }
};
