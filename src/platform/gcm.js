'use strict';

const config = require ('./gcm.json');
const gcm = require('node-gcm');

module.exports = {
  sendNofification: function(opts, cb) {
    cb = cb || function() {};

    var message = new gcm.Message({
      notification: {
          title: opts.title,
          icon: "ic_launcher",
          body: opts.body
      }
    });

    var sender = new gcm.Sender(config.key);

    sender.send(message, {
      topic: '/topics/global'
    }, cb);
  }
};
